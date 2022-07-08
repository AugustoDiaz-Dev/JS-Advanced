// Closures: functions that have access to the outer function's variables.
// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     inner();
// }
// outer(); 
// Output 1    

function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner();
}
const fn = outer();
fn();
fn();
// Output 1 2
// With closures and inner function has access to variables in the outer function scope even after the outer function has finished its execution.