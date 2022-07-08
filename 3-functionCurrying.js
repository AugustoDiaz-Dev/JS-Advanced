// 3- Function Currying

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1, 2, 3));
// sum(1, 2, 3) = 6 sum(1)(2)(3)

// Second way to write the same function
function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            }
        }
    }
}
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
// Output 6

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);
// Output 10

// Currying is use to compose reusable functions.