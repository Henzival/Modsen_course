"use strict";

const task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1");
      resolve();
    }, 300);
  });
};

const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve();
    }, 400);
  });
};

const task3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3");
      reject(new Error("Таска 3 Rip"));
    }, 100);
  });
};

const task4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4");
      resolve();
    }, 200);
  });
};

const handler = (tasks) => {
  return tasks.reduce((promises, task) => {
    return promises.then(() => {
      return task().catch((e) => {
        console.error("Ошибка в таске:", e.message);
      });
    });
  }, Promise.resolve());
};

handler([task1, task2, task3, task4])
  .then(() => {
    console.log("Таски выполнены");
  })
  .catch((error) => {
    console.error("Что-то сломалось:", error);
  });

