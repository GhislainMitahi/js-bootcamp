// Lexical Scope (Static Scope)
// Global Scope  - Defined outside of all code blocks
// Local Scope - Defined inside of all code blocks

// In a scope you can access variables defined in that  scope, or in any parent/ancestor scope

// Global scope (varOne)
   //Local scope (varTwo)
      // Local scope (varFour)
   // local scope (varThree)

let varOne = "varOne";

if (true) {
    console.log(varOne);
    
    let varTwo = "varTwo";
    console.log(varTwo)

    if (true) {
        let varFour = "varFour";
    }
}
 
if (true) {
    let varThree = "varThree";
}

console.log(varTwo)