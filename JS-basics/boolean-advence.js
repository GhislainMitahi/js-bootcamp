let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
    console.log('Is account blocked');
} else if (userRole === 'admin') {
    console.log('Welcome Admin');
} else {
    console.log('Welcome');
}

// challenge area

let temp = 45;

if (temp <= 32) {
    console.log("It's freezing outside !");
} else if (temp >= 110) {
 console.log("It's away hot outside !");    
} else {
    console.log(" Go for it. It is pretty nice");
}