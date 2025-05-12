let numero = 0

function menos() {
    numero--
    mostrar()
}

function mais() {
    numero++
    mostrar()

}

function zerar() {
    numero = 0
    mostrar()
}

function mostrar() {
     document.querySelector("p").innerText = numero

}

mostrar()