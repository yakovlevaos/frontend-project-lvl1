import readlineSync from 'readline-sync';

const numberOfRounds = 3;

function gamePlay(rulesOfGame, gameCheck) {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`);
    console.log(`${rulesOfGame}`);

    for (let i = 0; i < numberOfRounds; i += 1) {
        const [question, answer] = gameCheck();
        console.log(`Question: ${question}`);
        const userReply = readlineSync.question('Your answer? ');
        if (userReply !== answer) {
            console.log(`"${userReply}" is the wrong answer ;(. Correct answer was "${answer}".`);
            console.log(`Let's try again, ${userName}`);
            return;
        } console.log(`Correct!`);

    } console.log(`Congratulations, ${userName}!`);
}
export default gamePlay;