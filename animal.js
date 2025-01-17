
class Animal {
    speak() {
        console.log("This animal makes a sound.");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}
const genericAnimal = new Animal();
genericAnimal.speak();
const dog = new Dog();
dog.speak();
