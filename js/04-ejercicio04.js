/*
Dificultad:  🟢🟡
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

// pedir numeros hastas hastas precionar cancelar
//!= numero ALERT y seguir pidienod numeros
//CANCELAR indicar RESULTADO

let suma = 0;

do {
  let numero = prompt("Ingrese un Numero");

  if (numero = numero) {
    suma = suma + numero;
  } else {
    if (numero != undefined) alert("Usted no ingreso un numero");
  }
} while (numero != undefined);

document.write(suma);
