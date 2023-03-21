/* eslint-disable linebreak-style */
import bgGreeting from './subtasks/printGreeting.js';
import askForName from './subtasks/cli.js';
import evenGen from './subtasks/createQuestEven.js';
import ansInputAndCheck from './subtasks/inputAndCheck.js';
import afterword from './subtasks/printFarewell.js';

bgGreeting();
const evennum = () => {
  let prevNum = 0;
  let parityAndNum = [];
  let correctAnss = 0;

  const playerName = askForName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  do {
    parityAndNum = evenGen(prevNum);
    [, prevNum] = parityAndNum;
    if (ansInputAndCheck(playerName, parityAndNum[0])) { correctAnss += 1; } else { break; }
  } while (correctAnss < 3); // счётчик корректных ответов

  afterword(playerName, correctAnss === 3);
};
export default evennum;
