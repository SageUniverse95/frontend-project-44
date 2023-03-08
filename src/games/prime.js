import {
  generateRandomNumber, startEngine,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  for (let index = 2; index <= Math.sqrt(number); index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const randomNumber = generateRandomNumber(0, 50);
  const question = `Question: ${randomNumber}`;
  const trueAnswer = (isPrimeNumber(randomNumber)) ? 'yes' : 'no';
  const roundData = [trueAnswer, question];
  return roundData;
};

export default function runPrimeGame() {
  startEngine(description, generateData);
}
