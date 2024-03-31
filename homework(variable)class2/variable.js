// // What is variable?
// // variable act like a box where you can store your toys.
// // in programming its a container in your computers memory
// // where you can store information such as Number,text or more complex iteams.
// // you can also change the information stored in a variable
// // we declare variable with (let) (var) (const).
// // with "var" variable we print text with same names.
// // but with "const" and "let" we do not  make variable with same name.
// //this is a simple variable program.
var user = "Heloo world";
//now here i change variable name  now it will print "Hey Shiraz.
user = "heyShiraz";
console.log(user);
var num = "2"; //This "2" is string because when we write any thing in quotation marks typescript consider it string
var num2 = 2; //now this is number 
console.log(num + num2); //so here when i print both num and num2 so it print 22
//  //This is because: 
//  //if we plus  numbers+numbers=number
// //if we plus string  number+number=string
// //number+string=string
//unary operator 
var a = 5;
var b = 2;
var c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
