//Max/Min/Avg: Dado un array con múltiples valores, escribe una 
//función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del 
//array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
    function noname(arr) {
        var max = arr[0];
        var min = arr[0];
        var sum = 0;
        var arr2 =[];
        for (i = 0 ; i < arr.length ; i++) {
            if (arr [i] > max) {
                max = arr [i];
            }
            if(arr [i] < min) {
                min = arr [i];
            }
            sum = sum + arr[i];
        }
        arr2.push(max);
        arr2.push(min);
        arr2.push(sum/arr.length);
        return arr2;
        
        
        
    }
    console.log(noname([1,5,7,2,9]));