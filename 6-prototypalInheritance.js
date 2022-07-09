// 5- Prototypal inheritance
// The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

function SuperHero(fName, lName) {
    // this = {}
    Person.call(this, fName, lName);
    this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
    console.log('Fighting Crime');
}
SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero('Bruce', 'Wayne');

SuperHero.prototype.constructor = SuperHero;

console.log(batman.getFullName());