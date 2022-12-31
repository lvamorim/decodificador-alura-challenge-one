var input = document.getElementById("input");
var botaoCriptografar = document.getElementById("criptografar");
var botaoDescriptografar = document.getElementById("descriptografar");

var placeholder = document.getElementById("placeholder");
var divOutput = document.getElementById("container-output");
var output = document.getElementById("output");
var botaoCopiar = document.getElementById("copiar");



botaoCriptografar.addEventListener("click", () => {
    var textoValido = input.value.match(/^[a-z.,!?"\s]+$/);

    if (textoValido||divOutput.style.display == "none" && placeholder.style.display == "flex"){
        var criptografia = {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'};
        var textoCriptografado = input.value.replace(/[aeiou]/g, t => criptografia[t]);
        output.innerHTML = textoCriptografado;

        divOutput.style.display = "flex";
        placeholder.style.display = "none";
    }
    else if (input.value == '') {
        alert("Opa! Digite um texto a ser criptografado.");
    }
    else {
        alert("Apenas letras minúsculas e sem acento.\n\nÚnicos caracteres permitidos: . , ! ?");
        input.value = '';
    }
});

botaoDescriptografar.addEventListener("click", () => {
    var textoValido = input.value.match(/^[a-z.,!?"\s]+$/);

    if (textoValido||divOutput.style.display == "none" && placeholder.style.display == "flex"){
        var descriptografia = {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'};
        var textoDescriptografado = input.value.replace(/ai|enter|imes|ober|ufat/g, t=> descriptografia[t]);
        output.innerHTML = textoDescriptografado;

        divOutput.style.display = "flex";
        placeholder.style.display = "none";
    }
    else if (input.value == '') {
        alert("Opa! Digite um texto a ser descriptografado.");
    }
    else {
        alert("Apenas letras minúsculas e sem acento.\n\nÚnicos caracteres permitidos: . , ! ?");
        input.value = '';
    }
});

botaoCopiar.addEventListener("click", () => {
    output.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência");
});