const globalSymbol1 = Symbol.for("globalKey");
const globalSymbol2 = Symbol.for("globalKey");
console.log(globalSymbol1 === globalSymbol2); // Output: true
console.log(Symbol.keyFor(globalSymbol1)); // Output: "globalKey"
console.log(Symbol.keyFor(globalSymbol2)); // Output: "globalKey"
const localSymbol = Symbol("globalKey");
console.log(globalSymbol1 === localSymbol); // Output: false
console.log(Symbol.keyFor(localSymbol)); // Output: undefined
