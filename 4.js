    function suma(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++ ) {
            sum = sum + array[i];
        }
        return sum;

    }
    //var v = suma([1,2,3,4,5]);
    console.log(suma([5,5]));