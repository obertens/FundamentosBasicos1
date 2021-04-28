//Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función 
//que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
    function maximo(array) {
        var max = array[0];
        for(var i = 1 ; i<array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
    console.log(maximo([3,5,1,-10]));
