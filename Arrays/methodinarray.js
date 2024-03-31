// pop()	Removes the last element of the array and return that element
// push()	Adds new elements to the array and returns the new array length
// sort()	Sorts all the elements of the array
// concat()	Joins two arrays and returns the combined result
// indexOf()	Returns the index of the first match of a value in the array (-1 if not found)
// copyWithin()	Copies a sequence of elements within the array
// fill()	Fills the array with a static value from the provided start index to the end index
// shift()	Removes and returns the first element of the array
// splice()	Adds or removes elements from the array
// unshift()	Adds one or more elements to the beginning of the array
// includes()	Checks whether the array contains a certain element
// join()	Joins all elements of the array into a string
// lastIndexOf()	Returns the last index of an element in the array
// slice()	Extracts a section of the array and returns the new array
// toString()	Returns a string representation of the array
// toLocaleString()	Returns a localized string representing the array
var fruits = ['apple', 'mango', 'peach',];
// console.log(numbers);
console.log(fruits.pop()); //pop for removing last element of array item
fruits.push("chiku", "parrot", "kiwi", "banana"); //push for adding new item in array.
console.log(fruits);
console.log(fruits.length); //length of array iteam
fruits = fruits.concat('Fig', 'Mango'); //concat is use for adding two arrays 
console.log(fruits);
console.log(fruits.indexOf('apple')); //output: 0
