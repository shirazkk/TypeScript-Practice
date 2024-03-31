"use strict";
//There are Two functions 1st (Named/concrete function) 2nd Arrow function.
//Function Declaration/Defining
function preparemeal(dishName) {
    console.log("Making:" + dishName);
}
preparemeal("chicken Tikka"); //Function call
//Arrow
let preparenewmeal = (dishName) => {
    console.log("Making of:" + dishName);
};
preparenewmeal("Biryani");
