/*
Dificultad:  🟢🟡
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

// pedir una cadena de texto.
// mostrar la cadena con - entre letras.
// cadena.lenght
// cadena.charAt

let cadena = prompt("Ingrese una Cadena de Texto");
// hola que tal
let numerocaracteres = cadena.length; //devuelve la longitud de la cadena
//cadena.length=12
let caracter='';

let i=0;

for (i < 0; i < numerocaracteres; i++) {
  caracter = cadena.charAt(i);

  if (i == numerocaracteres - 1) {
    document.write(caracter);
  } else {
    document.write(caracter + "-");
  }
}

//averiguar que hace la variable i de la linea 20 de cadena.charat(i) , de donde la saca como la almacena como la obtiene-
// el if lo que hace ?¿ es decir si i es igual el numeor de caracter menos 1 escribo caracter si no escribo guion??
// tengo dudas con la variable i no se como la usa
