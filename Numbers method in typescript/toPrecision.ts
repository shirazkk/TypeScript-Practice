


//when you call toPrecision() on a number, it converts the number to a string representation with a specified precision (number of significant digits), allowing you to control how the number is displayed as a string. This string representation can then be used for various purposes in your program.



let num: number = 123.456789;

console.log(num.toPrecision(4)); // Output: "123.5"
console.log(num.toPrecision(2)); // Output: "1.2e+2"
console.log(num.toPrecision(7)); // Output: "123.4568"


console.log(num.toPrecision(2)&&num.toFixed());