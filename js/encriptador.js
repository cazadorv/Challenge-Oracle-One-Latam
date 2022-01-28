(function() {
    var divNoEncontrado = document.getElementById('divNoEncontrado');
    var divEncriptar = document.getElementById('divEncriptar');
    divEncriptar.style.display = 'none';
    divNoEncontrado.style.display = '';
    /* capturamos el boton encriptar y le agregamos un evento de click */
    let btnEncriptar = document.getElementById('btnEncriptar');
    btnEncriptar.addEventListener('click',Encriptar);

    /* capturamos el boton desencriptar y le agregamos un evento de click */
    let btnDesencriptar = document.getElementById('btnDesencriptar');
    btnDesencriptar.addEventListener('click',Desencriptar);
    
    /* Función para encriptar una frase */
    function Encriptar() {
        let textoEncriptar = document.getElementById('textoEncriptar').value;
        let textoEncriptado = document.getElementById('textoEncriptado');
        if (textoEncriptar == '' || textoEncriptar == null) {
            alert('No existen datos a encriptar')
        } else {
            /* Pasamos a minúscula */
            textoEncriptar = textoEncriptar.toLowerCase();
            /* Quitamos números, si existen */
            textoEncriptar = textoEncriptar.replace(/(\d+)/g,'');
            /* Sanitizamos acentos y caracteres especiales */
            textoEncriptar = textoEncriptar.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1");
            
            /* `La letra "e" es convertida para "enter"`*/
            textoEncriptar = textoEncriptar.replace('e','enter');
            /*`La letra "i" es convertida para "imes"`*/
            textoEncriptar = textoEncriptar.replace('i','imes');
            /* `La letra "a" es convertida para "ai"`*/
            textoEncriptar = textoEncriptar.replace('a','ai');
            /*`La letra "o" es convertida para "ober"`*/
            textoEncriptar = textoEncriptar.replace('o','ober');
            /* `La letra "u" es convertida para "ufat"` */
            textoEncriptar = textoEncriptar.replace('u','ufat');
            
            textoEncriptado.value = textoEncriptar;
            divEncriptar.style.display = '';
            divNoEncontrado.style.display = 'none';
            document.getElementById('textoEncriptar').value = '';            
        }
    }

    /* Función para desencriptar una frase */
    function Desencriptar() {
        let textoEncriptado = document.getElementById('textoEncriptado').value;
        let textoEncriptar = document.getElementById('textoEncriptar');

        if (textoEncriptado == '' || textoEncriptado == null) {
            alert('No existen datos a desencriptar')
        } else {
            textoEncriptar.value = textoEncriptado
            .replaceAll('ufat','u')
            .replaceAll('ober','o')
            .replaceAll('ai','a')
            .replaceAll('imes','i')
            .replaceAll('enter','e');
            document.getElementById('textoEncriptado').value = '';
        }
    }

}())