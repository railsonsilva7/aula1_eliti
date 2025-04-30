let numero = 0

function mais(){
numero++
mostrarNaTela()
}
function menos(){
numero--
mostrarNaTela()
}
function mostrarNaTela() {
const p = document.querySelector("p")
p.innerText = numero
}