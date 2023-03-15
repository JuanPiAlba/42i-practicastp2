/*
Dificultad:  🟢🟡🔴

5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: si ingresamos el DNI 40773821, la salida debería ser ‘L’
*/
let letra = '';
let resto = 0;
let number = 0;
do{
    number = prompt('Ingrese su numero de Dni')
    if(number > 0 || number < 99999999){        
        resto = numero%23
        switch(resto){
            case 0:
            letra = 't';
            break;
            case 1:
            letra = 'r'
            break;
            case 2:
            letra = 'w'
            break;
            case 3:
            letra = 'w'
            break;
            case 4:
            letra = 'w'
            break;
            case 5:
            letra = 'w'
            break;
            case 6:
            letra = 'w'
            break;
            case 7:
            letra = 'w'
            break;
            case 8:
            letra = 'w'
            break;
            case 9:
            letra = 'w'
            break;
            case 10:
            letra = 'w'
            break;
            case 11:
            letra = 'w'
            break;
            case 12:
            letra = 'w'
            break;
            case 13:
            letra = 'w'
            break;
            case 14:
            letra = 'w'
            break;
            case 15:
            letra = 'w'
            break;
            case 16:
            letra = 'w'
            break;
            case 17:
            letra = 'w'
            break;
            case 18:
            letra = 'w'
            break;
            case 19:
            letra = 'w'
            break;
            case 20:
            letra = 'w'
            break;
            case 21:
            letra = 'w'
            break;
            case 22:
            letra = 'w'
            break;           

        }

}

}
