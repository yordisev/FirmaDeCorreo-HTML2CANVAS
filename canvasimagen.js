function DescargarCarnet(){
    var objetivo = document.querySelector("#contenedor1");
    html2canvas(objetivo,{
        // width: 200,
        // height: 380,
        scale: 1,
        removeContainer:true
    }).then(canvas => {
        let enlace = document.createElement('a');
        enlace.download = "Firma Funcionario";
        enlace.href = canvas.toDataURL("#contenedor1");
        enlace.click();
    });
}