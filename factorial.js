function factorial(n) {
    // caso base
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // llamada recursiva
        return n * factorial(n - 1);
    }
}

// ejemplo de uso
console.log(factorial(5)); // salida: 120
