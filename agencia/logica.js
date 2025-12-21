// Reemplaza el script del formulario con este:
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value || 'No especificada';
    const plan = document.getElementById('plan').value || 'No especificado';
    const message = document.getElementById('message').value;
    
    // Tu número de WhatsApp (con código de país, sin +)
    // Ejemplo para México: 5215512345678
    const phoneNumber = 'TU_NUMERO_WHATSAPP'; // Reemplaza con tu número
    
    // Crear mensaje formateado
    const whatsappMessage = `*NUEVO CONTACTO DESDE WEB*%0A%0A` +
                           `*Nombre:* ${name}%0A` +
                           `*Email:* ${email}%0A` +
                           `*Empresa:* ${company}%0A` +
                           `*Plan de interés:* ${plan}%0A` +
                           `*Mensaje:*%0A${message}%0A%0A` +
                           `*Enviado desde:* DigitalSolutions Portafolio`;
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${573116457927}?text=${whatsappMessage}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappURL, '_blank');
    
    // Opcional: Mostrar confirmación
    alert(`Mensaje listo para enviar a WhatsApp. Se abrirá la aplicación.`);
    
    // Opcional: Resetear formulario después de 2 segundos
    setTimeout(() => {
        this.reset();
    }, 2000);
});
        
        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 10px 30px rgba(108, 99, 255, 0.15)';
            }
        });