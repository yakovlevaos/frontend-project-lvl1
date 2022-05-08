import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}!
Answer "yes" if the number is even, otherwise answer "no".`);
let numberOfQuestions = 0;
let trueReply;
do {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    if (randomNum % 2 === 0) {
        trueReply = 'yes';
    } else trueReply = 'no';
    const userReply = readlineSync.question('Your answer? ');
        if (userReply === trueReply) {
            console.log('Correct!');
            numberOfQuestions += 1;
            continue;
        } console.log(`"${userReply}" is the wrong answer ;(. Correct answer was "${trueReply}".`);
        break;
    } while (numberOfQuestions < 3);
    
if (numberOfQuestions === 3) {
    console.log(`Congratulations! ${userName}`);
} else console.log(`Let's try again, ${userName}`);