console.log("Before declaration with var:", a); // undefined (hoisted)
var a = 13; // Assigning a number
console.log("After declaration with var:", a); // 42
a = "Hello,Bindhu!"; // Reassigning with a string
console.log("After reassignment with var:", a); //"Hello, Bindhu!"


let message = "Hello, Bindhu!";
console.log("Global scope:", message); // Output: Hello, Bindhu!


if (true) {
    let blockMessage = "I am inside a block.";
    console.log("Inside block:", blockMessage); // Output: I am inside a block.
}
// console.log("Outside block:", blockMessage); // Error: blockMessage is not defined

for (let i = 0; i < 2; i++) {
    console.log("Inside loop:", i); // Output: 0, then 1
}
// console.log("Outside loop:", i); // Error: i is not defined


const greeting = "Hello, Bindhu!";
console.log("Greeting:", greeting); // Output: Hello, Bindhu!
// greeting = "Hi!"; // Error: Assignment to constant variable
if (true) {
    const blockConst = "I am block-scoped.";
    console.log("Inside block:", blockConst); // Output: I am block-scoped.
}
// console.log("Outside block:", blockConst); // Error: blockConst is not defined
const numbers = [1, 2, 3];
console.log("Original array:", numbers); // Output: [1, 2, 3]
numbers.push(4);
console.log("Modified array:", numbers); // Output: [1, 2, 3, 4]

