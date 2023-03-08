import {
  generateRandomNumber, startEngine,

} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (x, y) => (y === 0 ? x : calcGcd(y, x % y));

const generateData = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const trueAnswer = calcGcd(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const roundData = [trueAnswer, question];
  return roundData;
};

export default function runGCDGame() {
  startEngine(description, generateData);
}
