import gamePlay from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'What number is missing in the progression?';

const getProgression = (number, step) => {
  let newArray = [number];
  let nextNumber = number;
  for (let i = 0; i < 10; i += 1) {
    if (newArray.length === 10) {
      return newArray;
    } else
      nextNumber = nextNumber + step;
      newArray.push(nextNumber);
  } return newArray;
};

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
