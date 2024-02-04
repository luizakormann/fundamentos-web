/* Acessando elemento por ID --     MAIS USADOS --*/
let nome = window.document.getElementById("nome")

/* Acessando elemento por seletor -- MAIS USADOS --*/
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let mapa = document.querySelector("#mapa")

let nomeOk = false
let emailOk = false
let mensagemOk = false


nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido. Por favor, digite pelo menos 3 caracteres para podermos nos comunicar melhor ☺"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Olá!"
        txtNome.style.color = "blue"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Opa, isso não parece ser um e-mail..."
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Retornaremos nesse e-mail, pode pá!"
        txtEmail.style.color = "blue"
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")
    if (mensagem.value.length >= 750) {
        txtMensagem.innerHTML = "Mano, lança o papo reto! Máximo 750 caracteres"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert("Suave parça! Damos um salve assim que possível.")
    } else {
        alert("Alog de errado não está certo! Dá um lig ver se preencheu tudo certo.")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}