function activarBotones() {
  var textoEncriptado = document.getElementById("encriptador").value.trim();
  var btnDesencriptar = document.getElementById("btnDesencriptar");
  var btnCopiar = document.getElementById("btnCopiar");
  
  if (textoEncriptado !== "") {
      btnDesencriptar.style.display = "inline-block";
      btnCopiar.style.display = "inline-block";
  } else {
      btnDesencriptar.style.display = "none";
      btnCopiar.style.display = "none";
  }
}

function encriptar() {
  var texto = conseguirTexto();
  var textoEncriptado = encriptarTexto(texto);
  mostrarResultado(textoEncriptado);
  activarBotones();
}

function desencriptar() {
  var texto = conseguirTexto();
  var textoDesencriptado = desencriptarTexto(texto);
  mostrarResultado(textoDesencriptado);
  activarBotones();
}

function conseguirTexto() {
  return document.getElementById("encriptador").value; 
}

function mostrarResultado(texto) {
  document.getElementById("areaDesencriptar").innerText = texto;
}

function encriptarTexto(texto) {
  var textoEncriptado = ""; 
  for (var i = 0; i < texto.length; i++) {
      var caracter = texto[i];
      if (caracter === "e") {
          textoEncriptado += "enter";
      } else if (caracter === "i") {
          textoEncriptado += "imes";
      } else if (caracter === "a") {
          textoEncriptado += "ai";
      } else if (caracter === "o") {
          textoEncriptado += "ober";
      } else if (caracter === "u") {
          textoEncriptado += "ufat";
      } else {
          textoEncriptado += caracter; 
      }
  }
  return textoEncriptado;
}

function desencriptarTexto(texto) {
  var textoDesencriptado = "";
  for (var i = 0; i < texto.length;) {
      if (texto.substring(i, i + 5) === "enter") {
          textoDesencriptado += "e";
          i += 5;
      } else if (texto.substring(i, i + 4) === "imes") {
          textoDesencriptado += "i";
          i += 4;
      } else if (texto.substring(i, i + 2) === "ai") {
          textoDesencriptado += "a";
          i += 2;
      } else if (texto.substring(i, i + 4) === "ober") {
          textoDesencriptado += "o";
          i += 4;
      } else if (texto.substring(i, i + 4) === "ufat") {
          textoDesencriptado += "u";
          i += 4;
      } else {
          textoDesencriptado += texto[i];
          i++;
      }
  }
  return textoDesencriptado;
}

function copiarTexto() {
  var textoDesencriptado = document.getElementById("areaDesencriptar").innerText;
  
  var textareaTemp = document.createElement("textarea");
  textareaTemp.value = textoDesencriptado;
  document.body.appendChild(textareaTemp);
  
  textareaTemp.select();
  document.execCommand("copy");
  
  document.body.removeChild(textareaTemp);
  
  alert("Texto copiado al portapapeles.");
}