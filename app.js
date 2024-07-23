var textoInput = document.querySelector ("#inputText");
var textoOut = document.querySelector("#outputText");

function criptografar (){
    var texto = textoInput.value;

    var resultado_cript = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "obter").replace(/u/g, "ufat");

    document.getElementById("outputText").innerHTML = resultado_cript;
}

function descriptografar (){
    var texto = textoInput.value;

    var resultado_descript = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById("outputText").innerHTML = resultado_descript;
}

function copiar() {
    var textoCop = document.getElementById('outputText').querySelector('textarea');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado."); 
} 