//Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que 
//devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
 function avg(array) {
     var sum = 0;
     for(var i = 0; i<array.length; i++){
        sum = sum + array[i];
     }
     return sum/array.length;
 }
 console.log(avg([1,5,7,9]));