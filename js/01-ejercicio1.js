/*
Dificultad:  🟢
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

// solicitar la edad
// >18 mostrar "Puede Conducir"
// Numeor no valido "Numero no valido"

let edad =  parseInt(prompt('Ingrese su edad'))

if( edad >= 18) {
    document.write('Ya puede conducir')
}else{
    alert('Ingresaste un numero no valido como edad')
}