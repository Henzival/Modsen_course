'use strict';

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Float number error';
    }
}

const numberCheck = (number) => {
    if (number !== parseInt(number, 10)) {
        throw new CustomError('The number is float');
    }
    else {
        console.log(`Everything's alright`);
    }
}

try {
    numberCheck(8.5);
}
catch (err) {
    console.log(err);
}