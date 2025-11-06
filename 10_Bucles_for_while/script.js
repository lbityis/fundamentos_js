/* 5 Bucle for: Tabla de multiplicar
Pide un número al usuario e imprime su tabla de multiplicar del 1 al 10 en un solo alert.*/

function tablaMultiplicar() {
    let num = parseInt(prompt("Ingrese numero: "));
    let tablas = `Tabla de ${num}`;
    for (let i = 1; i <= 10; i++) {
        tablas += `\n ${num} x ${i} = ${num * i}`
    } alert(tablas);
}

/* 6 Bucle for: Números pares hasta n
Solicita un número n e imprime todos los números pares desde 1 hasta n usando un bucle for.*/

function par() {
    let num = parseInt(prompt("Ingresa un numero: "));
    let resultado = ` los numeros pares de ${num} son: `;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            resultado += ` ${i}`
        }
    } alert(resultado);
    
}

/* 7 Bucle for: Contar letras de una palabra
Pide una palabra al usuario y muestra cuántas letras tiene usando un bucle for para recorrerla.*/

function contable() {
    let word = prompt("Dime un numero: ")
    let cont = 0
    for (let i = 0; i < word.length; i++) {
        cont++
    }
    alert(`La palabra "${word} tiene ${cont} letras."`)
}

/* 8 Bucle for: Calcular factorial
Solicita un número n e imprime el factorial de ese número (n × n-1 × n-2 × … × 1) usando un bucle for.*/

function calculoFactorial() {
    let numero = parseInt(prompt("Ingrese un numero: "));
    let factorial = 1;
    let largo = "1";
    for (let i = 2; i <= numero; i++) {
        largo += ` * ${i}`
        factorial *= i;
    }
    alert(`el factorial de ${numero} es : ${largo} = ${factorial}`)
}

/* 9 Bucle for: Suma de números impares hasta n
Pide un número n y suma todos los números impares desde 1 hasta n.
Muestra el resultado con alert.*/

function numerosImpares() {
    let numero = parseInt(prompt("Ingresar numero: "));
    let respuesta = 0;
    let largoImpar = "1"
    for (let i = 2; i <= numero; i++) {
        if (i % 2 != 0) {
            respuesta += i
            largoImpar += ` + ${i}`
            console.log(i)
        }
    }
    respuesta += 1
    alert(`La suma de ${largoImpar} = ${respuesta}`)
}