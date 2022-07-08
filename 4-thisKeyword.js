// 4- this Keyword
// This keyword is used to access the current object
function sayMyName(name) {
    console.log(`My name is ${name}`)
}
sayMyName('Augusto');
sayMyName('Roberto');

// There are 4 ways to invoque a function in JS and determine the value of this keyword.

// 4-1 Implicit Binding
// This is the default behavior of the JavaScript engine.
const person = {
    name: 'Augusto',
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    }
}

person.sayMyName(); // My name is Augusto

// 4-2 Explicit Binding

function sayMyName() {
    console.log(`My name is ${this.name}`)
}

sayMyName.call(person); // My name is Augusto

// 4-3 New Binding

function Person(name) {
    // this = {}
    this.name = name;
}

const p1 = new Person('Augusto');
const p2 = new Person('Roberto');

console.log(p1.name, p2.name); // Augusto Roberto

// 4-4 Default Binding

sayMyName(); // My name is undefined

// const name = 'Mario'
globalThis.name = "Mario";
function sayMyName() {
    console.log(`My name is ${this.name}`)
}