const form = document.getElementById("formCita");

function obtenerCitas() {
  return JSON.parse(localStorage.getItem("citas")) || [];
}

function guardarCita(cita) {
  const citas = obtenerCitas();
  citas.push(cita);
  localStorage.setItem("citas", JSON.stringify(citas));
}

function horarioOcupado(fecha, hora) {
  const citas = obtenerCitas();
  return citas.some(c => c.fecha === fecha && c.hora === hora);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const corte = document.getElementById("corte").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  if (horarioOcupado(fecha, hora)) {
    alert("Ese horario ya está ocupado. Elige otro.");
    return;
  }

  const nuevaCita = { nombre, corte, fecha, hora };
  guardarCita(nuevaCita);

  const mensaje =
`Nueva cita agendada:
Cliente: ${nombre}
Servicio: ${corte}
Fecha: ${fecha}
Hora: ${hora}`;

  const telefono = "573000000"; // CAMBIAR
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
  form.reset();
});
alert("Cita agendada con éxito. Serás redirigido a WhatsApp para confirmar.");
