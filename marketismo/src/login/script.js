function login(){
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    if(nome && senha && nome === "admin" && senha ==="123456"){
        const user = {
        name: nome,
        dataEntrada: new Date(),
        id: Math.floor(Math.random() * 100000)
    }
        localStorage.setItem("usuario", JSON.stringify(user))
        window.location.href = "../Loja"
    }else{
        document.getElementById("error-model").style.display = "flex"
        document.getElementById("nome").style.borderBottom = "3px solid red"
        document.getElementById("senha").style.borderBottom = "3px solid red"
    }
}

function showPassword(){
    var inputSenha = document.querySelector('#senha')
    var log_eye = document.querySelector('#eye')

    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
        log_eye.setAttribute("src", "../../public/view2.png")
    }else{
        inputSenha.setAttribute("type", "password")
        log_eye.setAttribute("src", "../../public/view1.png")
    }
}

function fecharError(){
        document.getElementById("error-model").style.display = "none"
        document.getElementById("nome").style.borderBottom = "3px solid red"
        document.getElementById("senha").style.borderBottom = "3px solid red"
}