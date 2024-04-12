'use strict'

const factorial = (number) => {
    switch (number) {
        case 0:
        case 1:
            number = 1;
            break;
        default:
            number = number * factorial(number - 1);
            break;  
    }
    return number;
}

console.log(factorial(8));