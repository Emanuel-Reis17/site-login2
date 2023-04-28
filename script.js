function login(){
    let name = document.querySelector('input#xusername')
    let nasc = document.querySelector('input#xdata')
    let tel = document.querySelector('input#xtel')
    let email = document.querySelector('input#xemail')
    let password = document.querySelector('input#xsenha')
    let comment = document.querSelector('textarea#xcomment')

    if(name.length == 0 || nasc.length == 0 || tel.length == 0 || email.length == 0 || password.length == 0) {
        window.alert('~[ERRO] Dados Inválidos')
        return false
    } else {
        window.alert('Cadastro feito com sucesso!')
        return true
        textarea.innerHTML = name
    }
}