let numero = 0
function menos() {
    numero--
    mostrarNaTela()
}
function mais() {
    numero++
    mostrarNaTela()    
}
function zerar() {
    numero = 0
    mostrarNaTela()
}
function mostrarNaTela() {
    document.querySelector("p").innerText = numero
}
mostrarNaTela()
