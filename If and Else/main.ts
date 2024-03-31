// // let x = Math.random()*10; //it returns a random numbers between 0 and 1
// // if(x>=5){
// //     console.log(`x>=5 ${x.toFixed()}`);
    
// // }else{
// //     console.log(`x<=5 ${x.toFixed()} `)

// // }

// // class Calculator {
// //   add(a: number, b: number): number {
// //         return a + b;
// //     }

// //     subtract(a: number, b: number): number {
// //         return a - b;
// //     }
// // }

// // const calc =new Calculator();
// // console.log(calc.add(5, 3)); // Output: 8
// // console.log(calc.subtract(5, 3)); // Output: 2


// // function greet(name: string) {
// //     return `Hello, ${name}!`;
// // }

// // console.log(greet('Alice')); // Output: Hello, Alice!
// // console.log(greet('Bob')); // Output: Hello, Bob!





// // @errors: 2554
// function buildName(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
//   }
  
// //   let result1 = buildName("Bob"); // error, too few parameters
//   let result21 = buildName("Bob", "Adams" ); // error, too many parameters
//   let result3 = buildName("Bob", "Adams"); // ah, just right
// console.log(result21);
// console.log(result3);

// function buildNames(firstName: string, lastName?: string) {
//     if (lastName) return firstName + " " + lastName;
//     else return firstName;
//   }
   
//  let result1 = buildNames("Bob"); // works correctly now
//  let result2 = buildNames("Bob", "Adams", "Sr."); // error, too many parameters
//   Expected 1-2 arguments, but got 3.
//   let result3e = buildNames("Bob", "Adams"); // ah, just right
// console.log(result1);

//   console.log(result3e);

// // function buildName(firstName: string, ...restOfName: string[]) {
// //     return firstName + " " + restOfName.join(" ");
// //   }
   
// //   // employeeName will be "Joseph Samuel Lucas MacKinzie"
// //   let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie")
// //   console.log(buildName);

// // let suits = ["hearts", "spades", "clubs", "diamonds"];
 
// // function pickCard(x: { suit: string; card: number }[]): number;
// // function pickCard(x: number): { suit: string; card: number };
// // function pickCard(x: any): any {
// //   // Check to see if we're working with an object/array
// //   // if so, they gave us the deck and we'll pick the card
// //   if (typeof x == "object") {
// //     let pickedCard = Math.floor(Math.random() * x.length);
// //     return pickedCard;
// //   }
// //   // Otherwise just let them pick the card
// //   else if (typeof x == "number") {
// //     let pickedSuit = Math.floor(x / 13);
// //     return { suit: suits[pickedSuit], card: x % 13 };
// //   }
// // }
 
// // let myDeck = [
// //   { suit: "diamonds", card: 2 },
// //   { suit: "spades", card: 10 },
// //   { suit: "hearts", card: 4 },
// // ];
 
// // let pickedCard1 = myDeck[pickCard(myDeck)];
// // console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
 
// // let pickedCard2 = pickCard(15);
// // console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
  
  