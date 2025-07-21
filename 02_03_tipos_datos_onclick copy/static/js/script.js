// Declaración de variables
let diaCumpleaños = 25; // int - numerico 
let pi = 3.14; // float - numerico con parte decimal
let saludo = "Holi, profe"; // string - de texto
let meEstrese = true; // boolean - verdadero o falso (0,1)
let contar = [1, 2, 3, 4]; // array (arreglo) - lista de elementos
let yo = { nombre: "Elisa", edad: 16 }; // Object - diccionario
let valorIndefinidito; // undefined - sin valor asignado
let valorNulito = null;// null - valor nulo 
const mescumpleaños = "Noviembre"; // constante - no varia

//desafio 
let usuario = { nombre: "Elisa", edad: 16 };
let colores = ["rosado"," magenta"," fucsia"];
let esEstudiante = true;

// Funciones para mostrar cada valor con alert()

function mostrarDiaCumpleaños() {
  alert("dia de cumpleaños: " + diaCumpleaños);
}

function mostrarPi() {
  alert("pi  :"+ pi);
}

function mostrarSaludo() {
  alert("saludo: " + saludo);
}

function mostrarMeEstrese() {
  alert("¿me estrese?: " + meEstrese);
}

function mostrarContar() {
  alert("¿como se cuenta? : " + contar);
}

function mostrarYo() {
  alert("Objeto persona: " + JSON.stringify(yo));
}

function mostrarIndefinidito() {
  alert("indefinido: " + valorIndefinidito);
}

function mostrarNulito() {
  alert("nulo: " + valorNulito);
}

function mostrarConstante() {
  alert("mes cumpleaños: " + mescumpleaños);
}

//desafio 

function mostrarUsuario() {
  alert("Usuario: " +  JSON.stringify(usuario));
}

function mostrarColores() {
  alert("Colores: " + colores);
}

function mostrarEsEstudiante() {
  alert(" Es estudiante?: " + esEstudiante);
}
