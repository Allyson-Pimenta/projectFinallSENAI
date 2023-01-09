

document.querySelector('#quebrandoTela').style.backgroundColor = 'green'
let mudandoBody = document.querySelector('body')

const btnLight = document.querySelector('#butaoLight')
const btnDark = document.querySelector('#butaoblue')


btnLight.addEventListener('click', modoLight)

function modoLight(){
    mudandoBody.classList.add('btn_sol_css')
    mudandoBody.classList.remove('btn_lua_css')
}

btnDark.addEventListener("click", modoDark)

function modoDark(){
    mudandoBody.classList.add('btn_lua_css')
    mudandoBody.classList.remove('btn_sol_css')
}



