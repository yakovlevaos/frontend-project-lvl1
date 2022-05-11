import _ from 'lodash';
import gamePlay from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'What is the result of the expression?';

const listOperators = ['+', '-', '*'];

const calc = (num1, num2, operator) => {
    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
    }
  };
  
function gameCheck() {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const operator = listOperators[_.random(listOperators.length - 1)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(calc(num1, num2, operator));
    return [question, answer];
}

function calcGame() {
    return gamePlay(rulesOfGame, gameCheck);
}

export default calcGame;

