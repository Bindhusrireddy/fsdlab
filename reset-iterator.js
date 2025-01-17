function createIterableList(numbers) {
    return {
        numbers,
        index: 0,
        [Symbol.iterator]() {
            this.index = 0;
            return {
                numbers: this.numbers,
                index: this.index,

                next() {
                    if (this.index < this.numbers.length) {
                        return { value: this.numbers[this.index++], done: false };
                    }
                    return { value: undefined, done: true };
                },
            };
        },
        reset() {
            this.index = 0;
        },
    };
}
const list = createIterableList([10, 20, 30, 40]);
for (const value of list) {
    console.log(value); // Output: 10 20 30 40
}
list.reset();
for (const value of list) {
    console.log(value); // Output: 10 20 30 40
}
