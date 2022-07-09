// 5- Prototype

function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Doe');
// In JS every function has a property called prototype that points to an object.
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

console.log(person1.getFullName());
console.log(person2.getFullName());