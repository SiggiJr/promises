const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber < 6) {
      reject(`Was rejected because ${randomNumber} is smaller than 6`);
    } else resolve(randomNumber);
  });
};

getRandomNumber()
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
