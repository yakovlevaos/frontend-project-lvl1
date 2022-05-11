import gamePlay from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
}

function gameCheck() {
    const number = getRandomNumber(1, 100);
    const question = `${number}`;
    const answer = isPrime(number) ? 'yes' : 'no';
    return [question, answer];
}
  
  function primeGame() {
      return gamePlay(rulesOfGame, gameCheck);
  }
  
export default primeGame;

