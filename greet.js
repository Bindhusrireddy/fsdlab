
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }


    isAdult() {
        return this.age >= 18;
    }
}
const person1 = new Person("Abhi", 22);
person1.greet();
console.log(`${person1.name} is an adult: ${person1.isAdult()}`); // Output: Abhi is an adult: true
const person2 = new Person("Bindhu", 15);
console.log(`${person2.name} is an adult: ${person2.isAdult()}`); // Output: Bindhu is an adult: false
