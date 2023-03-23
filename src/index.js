/* eslint-disable linebreak-style */
import bgGreeting from './commons/printGreeting.js';
import askForName from './commons/cli.js';
import afterword from './commons/printFarewell.js';
import ansInputAndCheck from './commons/inputAndCheck.js';
import choose from './chooseGame.js';

function playGame() {
  bgGreeting();

  const playerName = askForName();

  let calledFrom = (new Error()).stack.split('\n')[2].trim().split(' ')[1];
  calledFrom = calledFrom.slice(calledFrom.indexOf('/bin/') + 5, calledFrom.indexOf('.js:'));
  const funcToExecute = choose(calledFrom);

  let correctAnss = 0;
  do {
    const roundResult = funcToExecute();
    if (ansInputAndCheck(roundResult)) { correctAnss += 1; } else { break; }
  } while (correctAnss < 3); // счётчик корректных ответов

  afterword(playerName, correctAnss === 3);
}
export default playGame;
