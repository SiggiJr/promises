const timeoutFunction = (time) => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.ceil(Math.random() * 1000);
    setTimeout(() => {
      resolve(randomNumber);
    }, time);
  });
};

Promise.all([timeoutFunction(1000), timeoutFunction(3000)]).then((numbers) =>
  numbers.forEach((number) => console.log(number))
);
