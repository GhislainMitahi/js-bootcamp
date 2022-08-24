// undefoined for variable

let name = "Ghislain"

if (name === undefined) {
    console.log("please provide a value !");
} else {
    console.log(name);
}


// undefined for function
// Undefined as function return default value

let square = function (num) {
  console.log(num);
}

let result = square()

console.log(result);

// Null as assigned value
 
let age = 1000;

age = null;

console.log(age);