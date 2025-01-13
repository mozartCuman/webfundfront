let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width= '310px';
email.style.width= '310px';

function validaNome(){

    let txt = document.querySelector('#txtNome');
   
    if (nome.value.length < 1 || nome.value.length > 2){
        txt.innerHTML = '' ;
        nomeOk = true;
    }else {
        txt.innerHTML = 'Nome Inválido';
        txt.style.color = 'red';
    }
}

function validaEmail(){

    let txtEmail = document.querySelector('#txtEmail')
   
    if (email.value.indexOf('@') != -1 && email.value.indexOf('.') != -1 || email.value.length == 0) {
        txtEmail.innerHTML = '';
        emailOk = true;
    } else {
        txtEmail.innerHTML = 'E-mail Inválido';
        txtEmail.style.color = 'red';
    }
}

function validaAssunto() { 

    let assunto = document.getElementById("assunto").value;
    let txtAssunto = document.getElementById("txtAssunto");
    
    if (assunto.length <= 100) { 
        txtAssunto.innerHTML = ""; 
        assuntoOk = true;
    } else { 
        txtAssunto.innerHTML = "O assunto deve ter menos 100 caracteres."; 
        txtAssunto.style.color = "red";
    }
}

function enviar() {
    
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulario enviado com sucesso!!!")
        
    } else {
        alert("Corrija o formulário!!!!")
        
    }
}

function mapaZoom