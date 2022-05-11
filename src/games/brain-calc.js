import _ from 'lodash';
import gamePlay from '../index.js';

const rulesOfGame = 'What is the result of the expression?';
const listOperators = ['+', '-', '*'];

const calc = (numberFirst, numberSecond, operator) => {
  switch (operator) {
    case '+': return numberFirst + numberSecond;
    case '-': return numberFirst - numberSecond;
    case '*': return numberFirst * numberSecond;
    default:
      throw new Error(`Wrong operator - ${operator}, use (+ or - or *)`);
  }
};

const gameCheck = () => {
  const numberFirst = _.random(1, 50);
  const numberSecond = _.random(1, 50);
  const operator = listOperators[_.random(listOperators.length - 1)];
  const question = `${numberFirst} ${operator} ${numberSecond}`;
  const answer = String(calc(numberFirst, numberSecond, operator));
  return [question, answer];
};

const calcGame = () => gamePlay(rulesOfGame, gameCheck);

export default calcGame;

