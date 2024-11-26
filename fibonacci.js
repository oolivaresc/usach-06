/*
Mostrar en consola la secuencia de Fibonacci:
a. Entre los números 0 y 1000.
b. Números pares entre 0 y 1000.
c. Números impares entre 0 y 1000.
Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase

*/

function secuenciaFibonacci(){
    const fibonacciNumbers = [0, 1];
    
    while(true){
        let resultado = fibonacciNumbers[fibonacciNumbers.length -2] + fibonacciNumbers[fibonacciNumbers.length -1];
        if(resultado <= 1000){
            fibonacciNumbers.push(resultado);
        }else{
            break;
        }
    }
    console.log("Secuencia de fibonacci entre 0 y 1000:", fibonacciNumbers);
    console.log("Secuencia de fibonacci pares entre 0 y 1000:", fibonacciNumbers.filter(number => number %2 === 0));
    console.log("Secuencia de fibonacci impares entre 0 y 1000:", fibonacciNumbers.filter(number => number %2 !== 0));
}

secuenciaFibonacci();