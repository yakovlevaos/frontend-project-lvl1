import gamePlay from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  while (num2) {
    const t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
};

function gameCheck() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
}

function gcdGame() {
  return gamePlay(rulesOfGame, gameCheck);
}

export default gcdGame;
