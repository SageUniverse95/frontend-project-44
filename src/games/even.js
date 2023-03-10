import {
  generateRandomNumber, startEngine,

} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => (randomNumber % 2 === 0);

const generateData = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const question = randomNumber;
  const trueAnswer = (isEven(randomNumber)) ? 'yes' : 'no';

  return [trueAnswer, question];
};

export default function runEvenGame() {
  startEngine(description, generateData);
}
