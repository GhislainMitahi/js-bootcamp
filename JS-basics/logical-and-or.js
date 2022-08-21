let temp = 0;


// Logical And Operator - True is both sides are True. false Otherwise
// Logical Or Operator - True is at least one side is true. False Otherwise.

// if (temp >= 60) {
//     if (temp <= 90) {
//        console.log("Good but this syntax is so long");
//     }
// }

if (temp >= 60 && temp <= 90) {
      console.log("It's pretty nice out !"); 
}else if (temp <= 0 || temp >= 120) {
    console.log('Do not go out side');
} else {
    console.log("Eh !. Do what you want");
}

// challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// Area both vegan? Only Offer up vegan dishes;
// At least one vegan? Make sure to offer up some vegan options.
// Else, Offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Only Offer up vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Make sure to offer up some vegan options");
} else {
    console.log("Offer up anything on the menu");
}