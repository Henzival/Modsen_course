'use strict';

let num = 2;

const f = () => {
    num += 1;
    console.log(num);  
    return num;    
}
setInterval(f, 1000);