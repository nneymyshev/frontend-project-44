/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import afterword from './commons/printFarewell.js';
import ansInputAndCheck from './commons/inputAndCheck.js';
import chooseGame from './chooseGame.js';

function playGame() {
  console.log('Welcome to the brain games!');

  const playerName = readlineSync.question('May I have your name? ') || 'UserName';
  console.log(`Hello, ${playerName}!`);

  let calledFrom = (new Error()).stack.split('\n')[2].trim().split(' ')[1];
  calledFrom = calledFrom.slice(calledFrom.indexOf('/bin/') + 5, calledFrom.indexOf('.js:'));
  const funcToExecute = chooseGame(calledFrom);

  let correctAnssNeeded = 3;
  do {
    const questionAndResult = funcToExecute();
    console.log(`Question: ${questionAndResult.question}`);
    if (ansInputAndCheck(questionAndResult.result)) { correctAnssNeeded -= 1; } else { break; }
  } while (correctAnssNeeded > 0); // счётчик корректных ответов

  afterword(playerName, correctAnssNeeded === 0);
}
export default playGame;
