let btn0 = document.getElementById("btn-0")
let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btnSumar = document.getElementById("btn-+")
let btn3 = document.getElementById("btn-3")     
let btn4 = document.getElementById("btn-4")
let btn5 = document.getElementById("btn-5")
let btnRestar = document.getElementById("btn_-")
let btn6 = document.getElementById("btn-6")
let btn7 = document.getElementById("btn-7")
let btn8 = document.getElementById("btn-8")
let btnDvidir = document.getElementById("btn-÷")
let btn9 = document.getElementById("btn-9")
let btnDelete = document.getElementById("btn-delete")
let btnIgual = document.getElementById("btn-=")
let btnX = document.getElementById("btn-x")
let Pantalla = document.getElementById("pantalla")

let numeroActual = [""];
let resultado = ""

btn0.addEventListener ('click',mostrarNumero)
btn1.addEventListener ('click',mostrarNumero,)
btn2.addEventListener ('click',mostrarNumero,)
btnSumar.addEventListener ('click',mostrarNumero)
btn3.addEventListener ('click',mostrarNumero)
btn4.addEventListener ('click',mostrarNumero)
btn5.addEventListener ('click',mostrarNumero)
btnRestar.addEventListener ('click',mostrarNumero)
btn6.addEventListener ('click',mostrarNumero)
btn7.addEventListener ('click',mostrarNumero)
btn8.addEventListener ('click',mostrarNumero)
btnDvidir.addEventListener ('click',mostrarNumero)
btn9.addEventListener ('click',mostrarNumero)
btnDelete.addEventListener ('click',limpiarPantalla)
btnIgual.addEventListener ('click',calcular)
btnX.addEventListener ('click',mostrarNumero

)

function mostrarNumero () {

    numeroActual += this.innerHTML
    Pantalla.value = numeroActual
    
}

function limpiarPantalla () {
    numeroActual = "" 
    Pantalla.value = numeroActual 
}

function calcular () {
    resultado = eval(numeroActual)
    Pantalla.value = resultado
    console.log(resultado)
}







/*function clickear (){
    botones.innerHTML = tecla;
    botones.addEventListener('click', () => {
    console.log("click");
});
}


clickear();*/

/*function pantalla (){
    screen = 5;
    console.log(screen);

}

pantalla();*/





/*if(screen != borrar){
    alert('Lo lograste');
}else{
    alert('suave');
}*/