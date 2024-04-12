"use strict";

const callbackfn = () => {
  console.log("All your base are belong to us! Ha-ha-ha-ha-ha!");
};

const finale = (callbackfn) => {
  setTimeout(callbackfn, 2000);
};

finale(callbackfn);
