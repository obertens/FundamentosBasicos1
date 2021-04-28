//De Número a String: Escribe una función que tome un array de números y 
//reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
    function dojo(arr) {
        for (var i = 0 ; i < arr.length ; i++) {
            if (arr[i] < 0 ) {
                arr[i] = "Dojo"
            }
        }
        return arr;

    }
    console.log(dojo([2,-3,2]));