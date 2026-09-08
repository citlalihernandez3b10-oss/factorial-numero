function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

// ejemplo de uso
console.log(factorial(5)); // salida: 120
console.log(factorial(10)); // salida: 120

