let numero = 0

function mais() {
    numero++
    mostrarNatela()
}

function menos(){
    numero--
    mostrarNatela()
}
 
function mostrarNatela() {
    const p = document.querySelector("p").innerText = numero
}

mostrarNatela()