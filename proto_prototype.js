
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    return `${this.name} makes a noise.`;
};
const dog = new Animal("Dog");
console.log(dog.name); // "Dog" (own property)
console.log(dog.speak()); // "Dog makes a noise." (inherited from prototype)
console.log(dog.__proto__ === Animal.prototype); // true (dog's __proto__ points to Animal's prototype)
console.log(Animal.prototype.constructor === Animal); // true (constructor points back to Animal)
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true (alternate way to access __proto__)
