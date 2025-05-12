let numero = 0

function menos(){
    numero--
    Mostrar_na_tela()    
}

function mais(){
    numero++
    Mostrar_na_tela()
}

function zerar(){
    numero = 0
    Mostrar_na_tela()
}

function Mostrar_na_tela(){
    document.querySelector("p").innerText = numero
}