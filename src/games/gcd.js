import {
  generateRandomNumber, startEngine,

} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (x, y) => (y === 0 ? x : calcGcd(y, x % y));

const generateData = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const trueAnswer = calcGcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [trueAnswer, question];
};

export default function runGCDGame() {
  startEngine(description, generateData);
}
