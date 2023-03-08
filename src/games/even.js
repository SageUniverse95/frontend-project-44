import {
  generateRandomNumber, startEngine,

} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkingEvenNumber = (randomNumber) => (randomNumber % 2 === 0);

const generateData = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const question = `Question: ${randomNumber}`;
  const trueAnswer = (checkingEvenNumber(randomNumber)) ? 'yes' : 'no';
  const roundData = [trueAnswer, question];
  return roundData;
};

export default function runEvenGame() {
  startEngine(description, generateData);
}
