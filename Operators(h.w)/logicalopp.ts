//logical operator:
//we have two logical operator & and || &&=AND ||=OR
//&& operator give true value if the all condition is true.
//on the other hand || operator give true if only one condition become true.

let s=10;
console.log(s>10 && s<10); //false
console.log(s<10 && s>20); //false
console.log(s>=10 && s<=10); //true
console.log(s>1 || s<9);     //true
console.log(s>=11 || s<=9);  //false
console.log ( s>=10 && s>2); //true
console.log ( !(s>10 || s<2));//true
console.log ( !(s>9 &&  s<11)); //false
console.log (!( s>11 || s<11));  //false



let weather="hot"&&"cold";
console.log(weather);

let weather2="hot"||"cold";
console.log(weather2);

let weather3=("hot")&&("cold")
console.log(weather3);

 
