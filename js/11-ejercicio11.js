/*
Dificultad:  🟢🟡
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

*/
// pedir 3 edad
// pedir 3 nombres
// indicar nombre de mayor

let nombre1 = prompt("Ingrese su nombre");
let edad1 = Number(prompt("Ingrese su edad"));
let nombre2 = prompt("Ingrese su nombre");
let edad2 = Number(prompt("Ingrese su edad"));
let nombre3 = prompt("Ingrese su nombre");
let edad3 = Number(prompt("Ingrese su edad"));

let mayorEdad = Math.max(edad1, edad2, edad3);

if (mayorEdad === edad1) {
  document.write(nombre1);
}
if (mayorEdad === edad2) {
  document.write(nombre2);
}
if (mayorEdad === edad3) {
  document.write(nombre3);
}

