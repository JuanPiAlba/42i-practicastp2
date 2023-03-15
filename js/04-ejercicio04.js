/*
Dificultad:  🟢🟡
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

// pedir numeros hastas hastas precionar cancelar
//!= numero ALERT y seguir pidienod numeros
//CANCELAR indicar RESULTADO
let numero = 0;
let suma = 0;
let numero2 = 0;
do {
  numero = prompt("Introduce un numero");
  numero = parseInt(numero);

  //si lo que ingresa por paramentro es entero
  if (Number.isInteger(numero2)) {
    suma += numero;
  } else {
    alert(numero + " No es un numero");
    numero = 0;
  }
} while (numero == undefined);
document.write(suma);
