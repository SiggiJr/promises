const doubleNumber = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 2000);
  });
};

console.log(await doubleNumber(2));
console.log(await doubleNumber(5));
