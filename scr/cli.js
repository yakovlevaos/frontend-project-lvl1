import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export var userName = readlineSync.question('May I have your name?');
console.log(`Hello ${userName}!`);
