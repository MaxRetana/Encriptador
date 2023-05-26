function encriptar() {
  var texto = document.getElementById("texto").value;
  var resultado = "";
  resultado = encriptarTexto(texto);
  document.getElementById("resultado").value = resultado;
  checkInput(); // Verificar el estado de los botones después de encriptar
}

function desencriptar() {
  var texto = document.getElementById("texto").value;
  var resultado = "";
  resultado = desencriptarTexto(texto);
  document.getElementById("resultado").value = resultado;
  checkInput(); // Verificar el estado de los botones después de desencriptar
}

function encriptarTexto(texto) {
  texto = texto.toLowerCase();
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

function desencriptarTexto(texto) {
  texto = texto.replace(/ufat/g, "u");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/enter/g, "e");
  return texto;
}

function copiar() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
  document.querySelector("#texto").value = resultado.value;
  document.querySelector("#resultado").value = "";
  checkInput(); // Verificar el estado del botón de copiar después de copiar
}

function checkInput() {
  var texto = document.getElementById("texto").value;
  var resultado = document.getElementById("resultado").value;
  var encriptarButton = document.querySelector(".btn-encriptar");
  var desencriptarButton = document.querySelector(".btn-desencriptar");
  var copiarButton = document.querySelector(".copiar");

  if (texto.trim() !== "") {
    encriptarButton.removeAttribute("disabled");
    desencriptarButton.removeAttribute("disabled");
  } else {
    encriptarButton.setAttribute("disabled", "disabled");
    desencriptarButton.setAttribute("disabled", "disabled");
  }

  if (resultado.trim() !== "") {
    copiarButton.removeAttribute("disabled");
  } else {
    copiarButton.setAttribute("disabled", "disabled");
  }
}

// Deshabilitar los botones de "Encriptar", "Desencriptar" y "Copiar resultado" al cargar la página
window.addEventListener("DOMContentLoaded", function () {
  checkInput();
});
