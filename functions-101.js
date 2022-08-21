// Function - inPut (argument) - outPut (return value)

let greatUser = function () {
    console.log('Welcome user!')
}

greatUser()
greatUser()

let square = function (num) {
    let result  = num * num
    return result
}

let value = square(4);
let otherValue = square(5);

console.log(value)
console.log(otherValue)

// Challenge area

// convertFahrenheitToCelsius

// Call a couple of time (32 -> 0) (68 -> 20)

// Print the converted value


let convertorFtoC = function (_fahrenheit) {
    let selicius = (_fahrenheit - 32) * 5 / 9;
    
    return selicius;
}

let celsius1 = convertorFtoC(32)
let celsius2 = convertorFtoC(68)

console.log(celsius1);
console.log(celsius2);

