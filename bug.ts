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

//This is the buggy code
let result2 = add(5, '3');
console.log(result2);