/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

/*

let rep = 0;

let limite = prompt("Ingrese un valor");

if (Number(limite) == limite) {
  if (limite > 0 && limite < 50) {
    for (i = 1; i <= limite; i++) {
      for (rep = 1; rep <= i; rep++) {
        document.write(rep);
      }
      document.write("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }
} else {
  alert("No has introducido un número");
}

*/

//del 1 al 50 pedidos por el usuario

let repeticion = 0;
let numero = prompt("Ingrese un numero comprendido entre el 1 y el 50");

if (Number(numero) == numero) {
  if (numero >= 1 && numero <= 50) {
    for (i = 1; i <= numero; i++) {     // 3 
      for (repeticion = 1; repeticion <= i; repeticion++) {
        document.write(repeticion);
      }
      document.write("<br>");
    }
  } else {
    alert("No es un Numero valido");
  }
}else{
    alert('No es un numero valido')
}
