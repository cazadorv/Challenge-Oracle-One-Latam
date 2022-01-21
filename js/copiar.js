(function() {
    /* capturamos el boton copiar y le agregamos un evento de click */
    let btnCopiar = document.getElementById('btnCopiar');
    btnCopiar.addEventListener('click',CopiarPortapapeles);

    function CopiarPortapapeles() {        
        var contenido = document.getElementById('textoEncriptado');        
        contenido.select();
        document.execCommand('copy');
    
        alert("Se copio correctamente!!");
    } 
}())