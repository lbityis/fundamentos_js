console.log("Conexion exitosa...")

/* Ejemplo : Contar numeros del 10 al 1 */

// Crear funcion bucle while

function ejecutarWhile() {
    let resultado = "El resultado es: "
    let count = 10;
    while (count > 0) {
        resultado += ${ count };
        count--
    }
    alert(resultado);
}

// Crear bucle for

function ejecutarFor() {
    let resultado = "El resultado es: "
    for (let i = 10; i > 0; i--) {
        resultado += ${ i };
    }
    alert(resultado);
} 

/* Ejercicio 1 : Imprimir del 1 a n (n es ingresado por teclado).
Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.*/

// Crea bucle while

function imprimirUno() {
    let n = parseInt(prompt("Ingresar numero: "));
    let contador = 1;
    let resultado = "Contamos: ";
    while (contador <= n) {
        contador++;
    }
    alert(resultado);
}