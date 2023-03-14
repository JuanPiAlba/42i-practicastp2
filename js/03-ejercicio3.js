/*
Dificultad:  🟢🟡
 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

// pedir cadena de texto hasta cancelar
// mostrar concatenadas con gion

let resultado = "";

do {
  let cadeneta = prompt("Interse una palabra");
  //solicitouna palabra
  if (cadeneta === "") {
    //si la palabra es igual a vacio concatenamos sin guion
        resultado = resultado + cadeneta;
  } else {
    // si la palabra es distinto de vacio la almaceno con un guion
    resultado = resultado + "-" + cadeneta;
  }//mientras presione confirm sale el pedido de nuevas cadenas 
} while (confirm("Desea continuar"));{
    //presiono cancelar y imprimo resultado
    document.write(resultado)
}