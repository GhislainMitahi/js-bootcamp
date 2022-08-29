let add = function (a, b){
    return b + a
}


let result = add(10, 4)

console.log(result)

// Default arguments
let getScoreText = function (name = 'annoumous', score = 0) {
    return 'Name ' + name + ' score ' + score
}
let scoreText = getScoreText(undefined, 23);
console.log(scoreText)

// challenge area
let getTip = function (total, tipPercent = .2) {
    return total * tipPercent;
}

let tip = getTip(40, .25);
console.log(tip);

