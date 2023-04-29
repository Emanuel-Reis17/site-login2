function login() {
    let name = document.querySelector('input#xusername')
    let data = document.querySelector('input#xdata')
    let tel = document.querySelector('input#xtel')
    let email = document.querySelector('input#xemail')
    let password = document.querySelector('input#xsenha')
    let comment = document.querySelector('textarea#comment')
    let result = document.querySelector('p#result')
    result.innerHTML = ''
    
    if (name.value.length == 0 || data.value.length == 0 || tel.value.length <= 10 || email.value.length == 0 || password.value.length < 8){
        alert('~[ERRO] Verifique seus dados e tente novamente')
        return false
    } else {
        alert('Dados cadastrados com sucesso!')
        result.innerHTML = `Nome: ${name.value} <br> Data: ${data.value} <br> Número: ${tel.value} <br> Email: ${email.value} <br> Senha: ${password.value} <br><br> Comentário: ${comment.value}`
    }
}