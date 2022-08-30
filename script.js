const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const btnIgual = document.querySelector('.equal-key');
const btnReset = document.querySelector('.reset-key');
const displayValorActual = document.querySelector('.valor-actual');

let numero = "";
let operador;



function modificarNumero(valorBoton) {
    if ((valorBoton.innerHTML == ".") && (displayValorActual.innerHTML.includes("."))) {
        return;
    }
    if (valorBoton.innerHTML == "DEL") {
        numero = numero.slice(0, -1);
    }
    else {
    numero = numero + valorBoton.innerHTML;
    }
    displayValorActual.innerHTML = numero;
        if (numero == "") {
        displayValorActual.innerHTML = "0";
    }
}

function tomarNumeroUno(valorBoton) {
    operador = valorBoton.innerHTML;
    num1 = displayValorActual.innerHTML;
    num1 = parseFloat(num1);
    displayValorActual.innerHTML = "0";
    numero = "";
}

function calcular(operador) {
    num2 = displayValorActual.innerHTML;
    num2 = parseFloat(num2);
    switch(operador) {
        case "+":
        displayValorActual.innerHTML = num1 + num2;
        break;
        case "-":
        displayValorActual.innerHTML = num1 - num2;
        break;
        case "/":
        displayValorActual.innerHTML = num1 / num2;
        break;
        case "x":
        displayValorActual.innerHTML = num1 * num2;
        break;
    };
}

function resetear() {
    num1 = ""; num2 = ""; numero = "";
    displayValorActual.innerHTML = "0";
}


numeros.forEach(button => {
    button.addEventListener('click', () => modificarNumero(button));
    });

operadores.forEach(button => {
    button.addEventListener('click', () => tomarNumeroUno(button));
})

btnIgual.addEventListener('click', () => calcular(operador));

btnReset.addEventListener('click', () => resetear());