//Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. 
//Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
    function nueva(arr) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
            arr [i] = 0;
            }
        }
        return arr;
    }
    console.log(nueva([2,-7,-2,5]));