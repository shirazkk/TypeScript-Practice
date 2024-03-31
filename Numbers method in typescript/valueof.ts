// valueOf() is a method used for obtaining the primitive value of an object.

let num1 = new Number(123);
console.log(num1) //Output: a number object with value 123
console.log(num1.valueOf()) //Output: 123
console.log(typeof num1) //Output: object

let num2 = num1.valueOf() 
console.log(num2) //Output: 123
console.log(typeof num2) //Output: number





let num0 = new Number(42); // Creating a Number object

// Calling valueOf() method on the Number object
let primitiveValue = num0.valueOf();

console.log(primitiveValue); // Output: 42 (Primitive value of the Number object)
