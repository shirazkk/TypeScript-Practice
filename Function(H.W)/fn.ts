//There are Two functions 1st (Named/concrete function) 2nd Arrow function.

//Function Declaration/Defining
function preparemeals( dishName:string) //this is function signature (named/concrete function
{
  console.log("Making:"+dishName);
  
}
preparemeals("chicken Tikka"); //Function call

//Arrow
let preparenewmeal = ( dishName:string)=>{
    console.log("Making of:"+dishName)

}
preparenewmeal("Biryani");
 