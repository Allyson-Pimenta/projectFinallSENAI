const form = document.querySelector('#formulario')

form.addEventListener('submit', (event)=>{
    
    event.preventDefault()

const name = document.querySelector('#name').value
const email = document.querySelector('#email').value
const senha = document.querySelector('#senha').value
const conSenha = document.querySelector('#confima_senha').value
const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


    if (name ==""){
        document.querySelector('#name').style.boxShadow = "0px 0px 15px 5px red"
        return false
    }else {
        document.querySelector('#name').style.boxShadow = "0px 0px 15px 5px  green"
    }

    if (email =="") {
        document.querySelector('#email').style.boxShadow = "0px 0px 15px 5px  red"
        return false
    }

    if (!reg.test(email)){
        document.querySelector('#email').style.boxShadow = "0px 0px 15px 5pxred"
        return false
    }else{
        document.querySelector('#email').style.boxShadow = "0px 5px 15px 5px  green"
    }

    if (senha ==""){
        document.querySelector('#senha').style.boxShadow = "0px 0px 15px 5px  red"
        return false
        }else{
        document.querySelector('#senha').style.boxShadow = "0px 5px 15px 5px  green"
        }

    if (senha !=conSenha){
        senha('#senha').style.boxShadow = "0px 0px 15px 5px  red"
        return false
    }else{
        document.querySelector('#senha').style.boxShadow = "0px 5px 15px 5px  green"
    }

return form.submit(alert('Dados enviados com sucesso!'))
});


