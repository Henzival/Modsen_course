'use strict';

const _ = require("lodash");
const obj1 = {
  a: 3,
  b: 5,
};
const obj2 = {
  a: 3,
  b: 5,
};
console.log(_.isEqual(obj1, obj2)); // через lodash

const isObject = (object) => {
  return object != null && typeof object === "object";
};

const eq = (obj1, obj2) => {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (let key of objKeys1) {
    let val1 = obj1[key];
    let val2 = obj2[key];

    const isObjects = isObject(val1) && isObject(val2);

    if ((isObjects && !eq(val1, val2)) || (!isObjects && val1 !== val2)) {
      return false;
    }
  }
  return true;
};

console.log(eq(obj1, obj2)); // обычный способ
