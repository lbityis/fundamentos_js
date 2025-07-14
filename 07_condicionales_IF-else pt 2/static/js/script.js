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