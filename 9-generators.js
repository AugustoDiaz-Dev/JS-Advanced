// 0- Generators (2015)
// Generators are a simple way to create iterators.

// Normal function 
function normalFunction() {
    console.log('Hello');
    console.log('World');
}
normalFunction();

// Generator function
function* generatorFunction() {
    // A generator function can pause the execution of the function and resume it later.
    yield 'Hello'
    yield 'World'
}
// This call is going to generate a generator object:

const generatorObject = generatorFunction();

for (const word of generatorObject) {
    console.log(word); // Hello World
}
