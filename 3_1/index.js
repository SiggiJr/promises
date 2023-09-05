const squared = (number) => {
  return new Promise((resolve, reject) => {
    resolve(number * number);
  });
};

const multipleSquared = async (number) => {
  return squared(number)
    .then((newNumber) => squared(newNumber))
    .then((newNumber) => squared(newNumber));
};

console.log(await multipleSquared(3));
