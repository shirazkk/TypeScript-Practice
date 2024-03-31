// function making_egg(){         //() pass function parameter
//     let ingrediants="egg,butter,salt"
//     console.log(ingrediants);
// }
// making_egg() //call function and also called argument
// function studentnames(){
//     let Student1="ahmed"
//     let Student2="shiraz"
//     let Student3="ali"
//     return `${Student1}  ${Student2}  ${Student3}`;
// }
// let result=studentnames()
// console.log(result);
// function halffryegg(egg:number=1,butter:number=1.5,salt:number=2):number{
//     return egg+butter+salt;
// }
// let answer=halffryegg();
// console.log(answer);
// function recepir(){
//     let nameuser=1+2+3;
//     return nameuser
// }
// let uyt=recepir();
// console.log(uyt)
// function name3(egg:number=1,...ingrediants:number[]){ //Rest operator
//     //console.log(egg) ;
//     console.log(egg,ingrediants);
// }
// name3(20,1.5,3.5,7,5)
// function name13(eggd:number=1,...ingrediantsa:number[]){
//     //console.log(eggd) ;
//     console.log(eggd,...ingrediantsa); // Spread operator
// }
// name3(20,1.5,3.5,7,5)
var Greet = function (greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
};
var greetanswer = Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
console.log(greetanswer);
var gree = Greet("Hello"); // returns "Hello !"
console.log(gree);
// // function Greezt(...names: string[], greeting: string) {  // Compiler Error
// //     return greeting + " " + names.join(", ") + "!";
// // }
// // Greezt("heelo","hey");  
// function calculateArea (radius: number):number {
//     return Math.PI * radius * radius;
// }
// // This function calculates the area of a circle
// const circleArea = calculateArea(5);
// // console.log(circleArea); // Output: 78.54
// let z = 100;
// function addToZ(x, y) {
//   return x + y + z;
// }
// let an=addToZ(2,3)
// console.log(an);
