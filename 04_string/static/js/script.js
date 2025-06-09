//Uso de strings ejemplo

function usarString() {
  let nombre = prompt("Ingrese su nombre:"); //Variable tipo texto
  let primeraLetra = nombre[0]; //Asignamos valor a primera letra con posicion 0 de nombre
  let ultimaLetra = nombre[nombre.length - 1];
  alert("Primera letra es: " + primeraLetra + "\nUltima letra es: " + ultimaLetra); //Mostrar resultado 
}

//Tarea 

function usarString2() {
  let apellido = prompt("Ingrese su apellido:");
  let primeraLetraApellido = apellido[1];
  let ultimaLetraApellido = apellido[apellido.length - 2];
  alert("Segunda letra es: " + primeraLetraApellido + "\nPenultima letra es: " + ultimaLetraApellido);
}

apellido[0] = "J" ; //No se puede realizar porque es inmutable y no funciona
