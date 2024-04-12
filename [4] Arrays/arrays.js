'use strict';

const arrMult = (array) => {
    return array.map(item => {
        return item + item * 0.1;
    });
}

console.log(arrMult([2,3,4,5,15]));