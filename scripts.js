let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}


var today=new Date();
var year=today.getFullYear();
document.getElementById("yearLogin").innerHTML=year;



document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el recargo de la página

    // Capturar los valores del formulario
    let params = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        phone: document.querySelector('input[name="phone"]').value,
        subject: document.querySelector('input[name="subject"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    // Enviar los datos a EmailJS
    emailjs.send("service_eq8hmus", "template_269u5zg", params, "-qzifumReVgSJhcku")

        .then(response => {
            alert("Mensaje enviado con éxito! 📩");
            document.querySelector("#contact-form").reset(); // Limpiar el formulario
        }, error => {
            console.error("Error al enviar el mensaje:", error);
            alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        });
});
