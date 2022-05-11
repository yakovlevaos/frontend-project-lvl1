import gamePlay from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

function gameCheck() {
    const number = getRandomNumber(1, 100);
    const question = `${number}`;
    const answer = isEven(number) ? 'yes' : 'no';
    return [question, answer];
}

function evenGame() {
    return gamePlay(rulesOfGame, gameCheck);
}

export default evenGame;