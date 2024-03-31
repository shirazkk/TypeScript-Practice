var myNumber1 = 10.8788;
console.log(myNumber1.toFixed()); // returns 11
console.log(myNumber1.toFixed(1)); //returns 10.9
console.log(myNumber1.toFixed(2)); //returns 10.88
console.log(myNumber1.toFixed(3)); //returns 10.879
console.log(myNumber1.toFixed(4)); //returns 10.8788
var mynum2 = 500;
var mynum3 = 276;
console.log("before tofixed() method :".concat(mynum3 / mynum2 * 100, "%"));
console.log("After using tofixed() method :".concat((mynum3 / mynum2 * 100).toFixed(), "%"));
