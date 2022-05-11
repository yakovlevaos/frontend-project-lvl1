import gamePlay from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'What number is missing in the progression?';

const getProgression = (number, step) => {
  let array = [number];
  let nextNumber = number;
  for (let i = 0; i < 10; i += 1) {
    if (array.length === 10) {
      return array;
    } else 
    nextNumber = nextNumber + step;
    array.push(nextNumber);
  } return array;
}

function gameCheck() {
  const number = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const hiddenItemIndex = getRandomNumber(1, 9);
  const progression = getProgression(number, step);
  const hiddenItemValue = progression[hiddenItemIndex];
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenItemValue);
  return [question, answer];
}

function progressionGame() {
    return gamePlay(rulesOfGame, gameCheck);
}

export default progressionGame;
