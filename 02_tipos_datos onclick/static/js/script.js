// Declaración de variables
let diaCumpleaños = 25; // int - numerico 
let pi = 3.14; // float - numerico con parte decimal
let saludo = "Holi, profe"; // string - de texto
let meEstrese = true; // boolean - verdadero o falso (0,1)
let contar = [1, 2, 3, 4]; // array (arreglo) - lista de elementos
let yo = { nombre: "Elisa", edad: 16 }; // Object - diccionario
let valorIndefinido; // undefined - sin valor asignado
let valorNulo = null;// null - valor nulo 
const mes = "Junio"; // constante - no varia

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

function mostrarBooleano() {
  alert("¿me estrese?: " + meEstrese);
}

function mostrarContar() {
  alert("¿como se cuenta? : " + contar);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}

//desafio 

function mostrarUsuario() {
  alert("Usuario: " + usuario);
}

function mostrarColores() {
  alert("Colores: " + colores);
}

function mostrarEsEstudiante() {
  alert(" Es estudiante?: " + esEstudiante);
}
