//Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores 
//que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
    function max(array, Y) {
        var array2 = [];
        for (i = 1; i < array.length; i++) {
            if (array[i] > Y) {
                array2.push(array[i]);
            }
        }
        return array2;
    }
    console.log(max([2,5,1,8], 3));

