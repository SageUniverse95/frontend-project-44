import {
  generateRandomNumber, startEngine,
} from '../index.js';

const description = 'What is the result of the expression?';

const calulateCorrectAnswer = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const generateData = () => {
  const operator = ['+', '-', '*'];
  const operand1 = generateRandomNumber(0, 10);
  const operand2 = generateRandomNumber(0, 10);
  const randomStep = generateRandomNumber(0, 2);
  const question = `${operand1} ${operator[randomStep]} ${operand2}`;
  const trueAnswer = calulateCorrectAnswer(operand1, operand2, operator[randomStep]);
  return [trueAnswer, question];
};

export default function runCalcGame() {
  startEngine(description, generateData);
}
