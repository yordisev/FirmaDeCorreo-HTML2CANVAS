/**
 * Ejemplo 4 de html2canvas para convertir el HTML de una web
 * a un elemento canvas - Descargar la captura como imagen PNG
 * 
 * @author Yordis Escorcia
 */
//Definimos el botón para escuchar su click
const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
    $objetivo = document.querySelector("#contenedor1"); // A qué le tomamos la fotocanvas
// Nota: no necesitamos contenedor, pues vamos a descargarla

// Agregar el listener al botón
$boton.addEventListener("click", () => {
    html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
        .then(canvas => {
            // Cuando se resuelva la promesa traerá el canvas
            // Crear un elemento <a>
            let enlace = document.createElement('a');
            enlace.download = "Firma de correo";
            // Convertir la imagen a Base64
            enlace.href = canvas.toDataURL("#contenedor1");
            // Hacer click en él
            enlace.click();
        });
});

function DescargarCarnet(){
    var objetivo = document.querySelector("#contenedor_carnet");
    html2canvas(objetivo,{
        width: 200,
        height: 380,
        scale: 1,
        removeContainer:true
    }).then(canvas => {
        let enlace = document.createElement('a');
        enlace.download = "Carnet Funcionario";
        enlace.href = canvas.toDataURL("#contenedor_carnet");
        enlace.click();
    });
}