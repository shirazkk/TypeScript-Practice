//logical operator:
//we have two logical operator & and ||.
//&& operator give true value if the both condition is true.
//on the other hand || operator give true if only one condition become true.
var s = 10;
console.log(s > 10 && s < 10); //false
console.log(s < 10 && s > 20); //false
console.log(s >= 10 && s <= 10); //true
console.log(s > 1 || s < 9); //true
console.log(s >= 11 || s <= 9); //false
console.log(s >= 10 && s > 2); //true
console.log(!(s > 10 || s < 2)); //true
console.log(!(s > 9 && s < 11)); //false
console.log(!(s > 11 || s < 11)); //false
