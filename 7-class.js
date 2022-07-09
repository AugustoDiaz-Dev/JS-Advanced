// 7- class
// In JS classes are syntactic sugar over the existing prototypal inheritance.
// What are classes? A class is a blueprint for an object.

class Person {
    // Constructor
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    // Method 
    sayMyName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const classP1 = new Person('John', 'Doe');
console.log(classP1.sayMyName());

class SuperHero extends Person {
    constructor(fName, lName) {
        // super() will call the constructor of the parent class (Person)
        super(fName, lName);
        this.isSuperHero = true;
    }
    fightCrime() {
        console.log('Fighting Crime');
    }
}

const batman = new SuperHero('Bruce', 'Wayne');

console.log(batman.sayMyName());