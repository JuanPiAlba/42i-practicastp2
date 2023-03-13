/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

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
}
