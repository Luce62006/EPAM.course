
function getSum  (a, b) {
    let result = a + b
    return result
}
console.log(getSum('Alla', true),getSum('Alla',2),getSum(true,2),getSum(false,2))

 // Allatrue  Alla2   3   2//

function getMultiplication  (a, b) {
    let result = a * b
    return result
}
console.log(getMultiplication('Alla', true),getMultiplication('Alla',2),getMultiplication(true,2),getMultiplication(false,2))
//NaN NaN 2 0//

function getDivide  (a, b) {
    let result = a / b
    return result
}
console.log(getDivide('Alla', true),getDivide('Alla',2),getDivide(true,2),getDivide(false,2))
//NaN NaN 0.5 0//

let str = "123";
console.log(typeof str); // string

let num = Number(str); // становится числом 123
console.log( "6" / "2" ); // 3

let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); //string


