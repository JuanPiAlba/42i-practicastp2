/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

// solicitar la nota de 0 a 10
// mostrar la calificacion por alert

let nota = parseInt(prompt("Ingrese la nota"));
console.log(nota);

if (nota <= 2) {
  document.write("Muy deficiente");
}
if (nota >= 3 && nota <= 4) {
  document.write("Insuficiente");
}
if (nota >= 5 && nota <= 6) {
  document.write("Suficiente");
}
if (nota === 7) {
  document.write("Bien");
}
if (nota >= 8 && nota <= 9) {
  document.write("Notable");
}
if (nota === 10) {
  document.write("Sobresaliente");
} else if (nota != 10) {
  document.write("Numero Erroneo");
} else {
  document.write("Introduce un numero valido");
}
