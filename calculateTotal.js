function calculateTotal(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

const result = calculateTotal(13,17,25,5);
console.log(result);
