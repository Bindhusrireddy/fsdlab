const reverseIterable = {
    create(array) {
        return {
            [Symbol.iterator]() {
                let index = array.length - 1; // Start from the last index
                return {
                    next() {
                        if (index >= 0) {
                            return { value: array[index--], done: false }; // Return current value and decrement index
                        }
                        return { value: undefined, done: true };
                    },
                };
            },
        };
    },
};
const arr = [1, 2, 3, 4];
const reverseIterator = reverseIterable.create(arr);

for (const value of reverseIterator) {
    console.log(value); // Expected output: 4 3 2 1
}
