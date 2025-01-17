function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
function* combineSequences(array, fibGenerator) {
    const fib = fibGenerator(); // Initialize the Fibonacci generator
    let index = 0;
    while (index < array.length || true) {
        if (index < array.length) {
            yield array[index++]; // Yield value from the array
        }
        yield fib.next().value; // Yield value from the Fibonacci sequence
    }
}
const numbers = [10, 20, 30, 40]; // Array of numbers
const combined = combineSequences(numbers, fibonacciGenerator);

for (let i = 0; i < 10; i++) { // Retrieve 10 values
    console.log(combined.next().value);
}
