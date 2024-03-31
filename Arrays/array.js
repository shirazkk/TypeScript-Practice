var number = [20, 30, 50, 70, 40, 90]; //start with zero  [0,1,2,3,4,5]
//console.log(number);
//console.log(number[0]);  //print 20
//console.log(number[5]); //print 90
console.log("before push method array lenght is:".concat(number.length)); // count the array length
//(number.push(101)); //push method increase one number at he last of array.
console.log("After push method array lenght is:".concat(number.push(101))); //after push it print [20,30,50,70,40,90,101].
console.log(number.pop()); //pop method decrease one number at the last of array
console.log(number);
