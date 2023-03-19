/*
Dificultad:  🟢🟡
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

let cadena = prompt("Ingrese un texto");
let cadenacaracteres = cadena.length;
cadena = cadena.toLocaleUpperCase();
let contador = 0;
let i;
for (i = 0; i < cadenacaracteres; i++) {
  car = cadena.charAt(i);
  if (car == "A" || car == "E" || car == "I" || car == "O" || car == "U") {
    contador++;
  }
}
document.write("Numero de vocales que tiene: " + contador + ".");

// tengo dudas con la aplicacion de el cahrat sobre i en la linea 12
