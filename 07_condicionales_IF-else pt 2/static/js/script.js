/*Comparar la longitud de dos palabras. Solicita dos palabras con prompt(). 
Compara cuántas letras tiene cada una y muestra cuál es más larga o si tienen el mismo largo.*/

function encontrarPalabraLarga() {
    let pal1 = prompt("Ingrese primera palabra");
    let pal2 = prompt("Ingrese segunda palabra");
    if (pal1 == "" && pal2 == "") {
        alert("Ingrese un valor")
    } else if (pal1.length < pal2.length) {
        alert(`La palabra mas larga es ${pal2} con ${pal2.length} caracteres`)
    } else if (pal1.length == pal2.length) {
        alert(`ambas tienen el mismo largo con ${pal2.length} caracteres`)
    } else {
        alert(`La palabra mas larga es ${pal1} con ${pal1.length} caracteres`)
    }
}

/*Posicion y longitud no es lo mismo:

let arreglo = [1,2534, 4,5];
arreglo.length; 4 longitud
arreglo [0]; posicion


let nombre = "Matias Rios";
nombre.length; 11 longitud
nombre[7];posicion */


/*Validar correo electrónico: Pide al usuario que ingrese un correo. Verifica si el texto contiene el símbolo @.
 Si lo tiene, muestra "Correo válido", si no, "Correo inválido".*/

 function validarCorreo(){
    let email = prompt("Por favor, ingresar correo: ");
    if (email.includes("@")) {
        alert("Correo válido");
    } else 
        alert("Correo inválido");
 }

 /*Verificar si un número es positivo o negativo
Solicita un número. Muestra si es positivo, negativo o cero.*/

function verificarNumero(){
    let numero = parseInt(prompt("Ingresar numero:"))
}