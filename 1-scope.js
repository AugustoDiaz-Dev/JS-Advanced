// 1- Scope (nested functions). Lexical Scoping

let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer(); // Output 10 20 30

// When we have nested functions JS starts with the innermost function and goes outwards.

// 2- Closures

