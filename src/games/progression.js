import {
  generateRandomNumber, startEngine,
} from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const arrOfNumbers = [];
  const rangeProgression = 10;
  const randomStep = generateRandomNumber(1, 50);
  for (let index = generateRandomNumber(1, 50);
    arrOfNumbers.length < rangeProgression; index += randomStep) {
    arrOfNumbers.push(index);
  }
  return arrOfNumbers;
};

const generateData = () => {
  const progression = generateProgression();
  const randomStep = generateRandomNumber(0, 9);
  const actualAnswer = progression[randomStep];
  progression[randomStep] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const roundData = [actualAnswer, question];
  return roundData;
};

export default function runProgressionGame() {
  startEngine(description, generateData);
}
