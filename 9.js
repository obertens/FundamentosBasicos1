//Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

    function nuevo(arr2) {
        for(i = 0 ; i < arr2.length; i++){
        arr2[i]= arr2[i] * arr2[i];
        }
        return arr2;
    }
    console.log(nuevo([2,7,5,8,9]));

