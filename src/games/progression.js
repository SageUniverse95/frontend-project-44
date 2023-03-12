import {
  generateRandomNumber, startEngine,
} from '../index.js';

const description = 'What number is missing in the progression?';
const randomStep = generateRandomNumber(1, 50);
const randomNumberInProgression = generateRandomNumber(1, 50);

const generateProgression = (rangeProgression, randomStepInProgression, numberInProgression) => {
  const arrOfNumbers = [];
  for (let index = numberInProgression;
    arrOfNumbers.length < rangeProgression; index += randomStepInProgression) {
    arrOfNumbers.push(index);
  }
  return arrOfNumbers;
};

const generateData = () => {
  const progression = generateProgression(10, randomStep, randomNumberInProgression);
  const randomIndex = generateRandomNumber(0, 9);
  const actualAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [actualAnswer, question];
};

export default function runProgressionGame() {
  startEngine(description, generateData);
}
