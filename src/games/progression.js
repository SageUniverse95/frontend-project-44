import {
  generateRandomNumber, startEngine,
} from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (rangeProgression, randomStepInProgression, numberInProgression) => {
  const arrOfNumbers = [];
  for (let index = numberInProgression;
    arrOfNumbers.length < rangeProgression; index += randomStepInProgression) {
    arrOfNumbers.push(index);
  }
  return arrOfNumbers;
};

const generateData = () => {
  const randomStep = generateRandomNumber(1, 50);
  const randomNumberInProgression = generateRandomNumber(1, 50);
  const rangeProgression = 10;
  const maxIndexInProgression = 9;

  const progression = generateProgression(rangeProgression, randomStep, randomNumberInProgression);
  const randomIndex = generateRandomNumber(0, maxIndexInProgression);
  const actualAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [actualAnswer, question];
};

export default function runProgressionGame() {
  startEngine(description, generateData);
}
