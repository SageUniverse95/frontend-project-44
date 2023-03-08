import readlineSync from 'readline-sync';

export const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

export const startEngine = (description, actualAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundForWin = 3;

  for (let i = 0; i < roundForWin; i += 1) {
    const [trueAnswer, question] = actualAnswer();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) !== String(trueAnswer)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
