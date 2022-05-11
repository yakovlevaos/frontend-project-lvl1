import gamePlay from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';


function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
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

