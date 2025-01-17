
function createInfiniteSequence() {
    let current = 1;

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    return { value: current++, done: false };
                },
            };
        },
    };
}
const infiniteSequence = createInfiniteSequence();
const maxSteps = 10;
let count = 0;

for (const value of infiniteSequence) {
    console.log(value);
    count++;
    if (count >= maxSteps) break;
}
