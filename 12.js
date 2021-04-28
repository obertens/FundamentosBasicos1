//Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
//La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
    function inter(array) {
         var primero = array[0];
         var ultimo = array [array.length -1];
        array[0]= ultimo;
        array[array.length - 1] = primero;
        return array;
    }
    console.log(inter([2,5,7,9]));
    