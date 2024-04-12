'use strict';

const func = async () => {
  const suspects = await fetch(`https://api.fbi.gov/wanted/v1/list`).then(
    (list) => list.json()
  );
  console.log(JSON.stringify(suspects, null, 1));
  return suspects;
};

func();
