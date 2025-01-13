let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


nome.style.width= '305px'
email.style.width= '305px'


function validaNome(){

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 1 || nome.value.length > 2){
        txt.innerHTML = ''  
    }else {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') != -1 && email.value.indexOf('.') != -1 || email.value.length == 0) {
        txtEmail.innerHTML = ''
    } else {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if (assunto.value.lenght > 3){
        txtAssunto.innerHTML = 'Texto muito grande! Digite no maximo 100 caracteres!'
    }
}
