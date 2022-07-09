// 8- Iterables and Iterators

// const string = 'Augusto';

// for (const char of string) {
//     console.log(char);
// }

// const array = [1, 2, 3, 4, 5];

// for (const item of array) {
//     console.log(item);
// }

// In this way we create owr own iterable object.
const obj = {
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step === 1) {
                    return {
                        value: 'Hello',
                        done: false
                    };
                }
                else if (step === 2) {
                    return {
                        value: 'World',
                        done: false
                    };
                }
                return {
                    value: undefined, done: true
                }
            }
        }
        return iterator;
    }
}

for (const word of obj) {
    console.log(word); // Hello World
}

// What we have done here JS do it internally for strings, arrays, maps and sets. Then we can do it for our own objects.
