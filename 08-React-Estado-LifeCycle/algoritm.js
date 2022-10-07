/*
by: jakepy :D

Dado una lista de numeros enteros,
tenemos que verificar si en esta lista existen
dos numero cuya suma da un numero especifico.

Ejemplo --> 10

Cabe recalcar que el me tiene que devolver en un objeto, el array con
los numero que conforman la suma, y el valor del resultado de la suma de
esos dos numero obtenidos en el array. NOTE: No usar metodos de ordenamiento

! No usar metodos de array ni nda por el estilo.
*/

function verificarSumaArr(arr, num) {}

let arr = [5, 3, 3, 6, 3, 5, 5];

console.log(verificarSumaArr(arr, 10));



let aux = 1;
let numerosObtenidos = [];
for (let i = 0; i < arr.length; i++) {
  console.log(`Variable i: ${i}`);
  console.log(`Variable auxiliar: ${aux}`);
  if (arr[i] + arr[aux] === num) {
    numerosObtenidos.push(arr[i], arr[aux]);
  }
  aux += 1;
}
return {
  arrayDeNumeroENcontrados: numerosObtenidos,
  sumaNUmerosObtenidos: numerosObtenidos.reduce((a, b) => a + b),
};