// encriptar el texto
function encriptarTexto() {
    const entrada = document.getElementById("entradaTexto").value;
    let resultado = '';

    for (let i = 0; i < entrada.length; i++) {
        let charCode = entrada.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Encriptar solo letras minúsculas
            resultado += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
        } else {
            resultado += entrada[i]; // Mantener los caracteres que no son letras minúsculas
        }
    }

    document.getElementById("salidaTexto").value = resultado;
    mostrarResultado();
}

// desencriptar el texto
function desencriptarTexto() {
    const entrada = document.getElementById("entradaTexto").value;
    let resultado = '';

    for (let i = 0; i < entrada.length; i++) {
        let charCode = entrada.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Desencriptar solo letras minúsculas
            resultado += String.fromCharCode(((charCode - 97 - 3 + 26) % 26) + 97);
        } else {
            resultado += entrada[i]; // Mantener los caracteres que no son letras minúsculas
        }
    }

    document.getElementById("salidaTexto").value = resultado;
    mostrarResultado();
}

// mostrar el resultado
function mostrarResultado() {
    const salida = document.getElementById("salidaTexto").value;
    const imagen = document.getElementById("ImagenMensaje");
    const textoSuperior = document.getElementById("TextoSuperior");
    const textoInferior = document.getElementById("TextoInferior");
    const cuadroSalida = document.getElementById("salidaTexto");
    const botonCopiar = document.querySelector(".cuadro__copiar");

    if (salida.trim() !== "") { 
        imagen.style.display = "none";
        textoSuperior.style.display = "none";
        textoInferior.style.display = "none";
        cuadroSalida.style.display = "block"; 
        botonCopiar.style.display = "flex"; 
    } else {
        imagen.style.display = "block";
        textoSuperior.style.display = "block";
        textoInferior.style.display = "block";
        cuadroSalida.style.display = "none"; 
        botonCopiar.style.display = "none"; 
    }
}

// copiar texto encriptado
function copiarTexto() {
    const salidaTexto = document.getElementById('salidaTexto');

    salidaTexto.select();
    salidaTexto.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles!');
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
    }
}

window.copiarTexto = copiarTexto;
