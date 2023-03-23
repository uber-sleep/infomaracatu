

document.getElementById("enviar").addEventListener ("click", validaFormulário)

function validaFormulário() {
    if(document.getElementById("nome").value != "" 
    && document.getElementById("email").value != "" 
    && document.getElementById("cel").value != ""){ 
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome e email!")
    }
}