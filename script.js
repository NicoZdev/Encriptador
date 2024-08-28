// Función para encriptar texto
function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .toLowerCase() // Convertir a minúsculas
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('outputText').value = encryptedText;
}

// Función para desencriptar texto
function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .toLowerCase() // Convertir a minúsculas
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('outputText').value = decryptedText;
}

// Función para copiar texto
function copyText(elementId) {
    let textToCopy = document.getElementById(elementId);
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto copiado: " + textToCopy.value);
}
