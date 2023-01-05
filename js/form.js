

const form = document.querySelector('#cadastro')

form.addEventListener('submit', (event) => {
   
    event.preventDefault();

    const reg = /^\([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]w+)*$/
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const password= document.querySelector('#password').value;
    const confirm_password = document.querySelector('#confirm_password').value;

    if (password != confirm_password){
        alert('As senhas não são iguais!')
        return false
    }

    if (nome ==""){
    alert('O campo nome é necessário!')
        return false
    }

    if (email ==""){
        alert('O campo e-mail é obrigatório')
        return false
    }

    if (!reg.test(email)){
        alert('Esse e-mail não é válido')
        return false
    }

    return form.submit(alert('Seus dados foram enviados com sucesso!'))
});

const botaoAzul =document.querySelector('#blue')
const botaoDark =document.querySelector('#dark')
const body =document.querySelector('body')

botaoAzul.addEventListener("click", bluemode)

function bluemode(){
    body.classList.add("btn_blue")
    body.classList.remove("btn_dark")
    document.querySelector('#blue').setAttribute('display:none')
}
botaoDark.addEventListener('click', darkmode)

function darkmode(){
    body.classList.add('btn_dark')
    body.classList.remove('btn_blue')
}