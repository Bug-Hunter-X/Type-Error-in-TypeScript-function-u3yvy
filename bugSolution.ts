function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
console.log(result); //Output: 8
result = subtract(5, 3); // result is 2
console.log(result); //Output:2

//Solution: Type Guard
function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addImproved(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}

let result2 = addImproved(5, '3'); // throws an error
let result3 = addImproved(5, 3); // result is 8
console.log(result3); //Output: 8