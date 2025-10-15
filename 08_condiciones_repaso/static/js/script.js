/* 1️⃣ Edad y etapa de vida
Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.
Si tiene entre 13 y 17 → “Eres adolescente”.
Si tiene 18 o más → “Eres adulto”.
📘 Práctica: uso de rangos con if, else if, else.*/

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad < 13) {
        alert("Eres un niño!");
    } else if (edad >= 13 && edad < 18) {
        alert("Eres un adolocente!")
    } else {
        alert("Eres un adulto!")
    }
}

/* 2️⃣ Validar contraseña exacta
Pide una contraseña. (1234)
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
Si no, muestra “Acceso denegado”.
📘 Práctica: comparación exacta (===).*/

function validarContraseña() {
    let clave = "1234";
    let pass = prompt("Ingresar su contraseña");
    // Condición estructura if - else
    if (pass == clave) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}

/* 3️⃣ Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
Si no → “No contiene la letra E”.
💡 Usa:
if (palabra.toLowerCase().includes('e')) { ... } */

function verificarLetra() {
    let letra = prompt("Escribe una palabra: ");
    if (palabra.toLowerCase().includes('e')) {
        alert("La palabra contiene la letra e")
    } else {
        alert("La palabra no contiene la letra e")
    }
}

/* 4️⃣ Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.
Si el segundo es mayor → “El segundo número es mayor”.
Si son iguales → “Son iguales”.
📘 Práctica: comparaciones dobles.*/

function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));
    if (num1 < num2) {
        alert("El número " + num1 + " es menor que " + num2);
    } else if (num1 == num2) {
        alert("El número " + num1 + " es menor que " + num2);
    } else {
        alert("El número " + num1 + " es mayor que " + num2);
    }
}

/* 5️⃣ Determinar si el número es par o impar
Pide un número.
Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
Si no → “Número impar”.
📘 Práctica: uso del operador módulo %.*/

function numeroPar() {
    let num = parseInt(prompt("Colocar un número"));
    if (num % 2 == 0) {
        alert("Número par");
    } else {
        alert("Número impar");
    }
}

/*6️⃣ Revisar palabra inicial
Pide una palabra.
Si empieza con la letra “A” o “a” → “Empieza con A”.
Si no → “No empieza con A”.
💡 Puedes usar:
if (palabra[0].toLowerCase() === 'a') { ... }*/

function palabraInicial() {
    let palabra = prompt("Ingrese una palabra: ");
    if (palabra[0].toLowerCase().includes('a')) {
        alert("Su palabra empieza con A")
    } else {
        alert("Su palabra no empieza con A")
    }
}

/*7️⃣ Temperatura ambiente
Pide una temperatura.
Si es menor a 10 → “Hace frío”.
Si es entre 10 y 25 → “Clima templado”.
Si es mayor o igual a 26 → “Hace calor”.
📘 Práctica: comparaciones encadenadas.*/

function temperaturaAmbiente() {
    let temperatura = parseInt(prompt("Ingresa una temperatura: "))
    if (temperatura < 10) {
        alert("Hace frio")
    } else if (temperatura >= 10 && temperatura <= 25) {
        alert("Clima Templado")
    } else if (temperatura >= 26) {
        alert("Hace calor")
    }
}


/*8️⃣ Nombre reconocido
Pide un nombre.
Si el nombre es “Dany” → “Hola, profesor 👋”.
Si el nombre es “Ely” → “Hola, mamá 🌷”.
En cualquier otro caso → “Hola, visitante”.
📘 Práctica: varias condiciones exclusivas.*/

function pedirNombre() {
    let nombre = prompt("Ingresar un nombre: ");
    nombre = nombre.toUpperCase();
    if (nombre === "DANY") {
        alert("Hola, Profesor 👋")
    } else if (nombre === "ELY") {
        alert("Hola, mamá 🌷")
    } else {
        alert("Hola, visitante")
    }
}

/*9️⃣ Nota de evaluación
Pide una nota entre 1 y 7.
Si es 4 o más → “Aprobado”.
Si es menor que 4 → “Reprobado”.
Si está fuera del rango 1–7 → “Nota inválida”.
📘 Práctica: validaciones con límites.*/


function notaEvaluacion() {
    let nota = parseInt(prompt("ingresa tu nota:"));
    if (nota <= 4 && nota >= 1) {
        alert("Reprobado");
    } else if (nota > 4 && nota <= 7) {
        alert("Aprobado");
    } else {
        alert("por favor, ingresar valor valido");
    }
};

/*🔟 Verificar si contiene una palabra clave
Pide una frase.
Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.
Si no → “No contiene la palabra clave”.
💡 Usa: if (frase.toLowerCase().includes('jesús')) { ... }*/

function palabraClave() {
    let frase = prompt("Escribe una frase: ");
    if (frase.toLowerCase().includes("jesus")) {
        alert(`La frase ${frase} tiene la palabra clave 🙌`);
    } else {
        alert(`la frase ${frase} no contiene la palabra clave`)
    }
}
