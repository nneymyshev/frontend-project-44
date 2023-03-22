/* eslint-disable linebreak-style */
import bgGreeting from './subtasks/printGreeting.js';
import askForName from './subtasks/cli.js';
import ansInputAndCheck from './subtasks/inputAndCheck.js';
import afterword from './subtasks/printFarewell.js';
import progGen from './subtasks/createQuestProg.js';

bgGreeting();
const progression = () => {
  const playerName = askForName();
  let correctAnss = 0;
  console.log('What number is missing in the progression?');
  do {
    const missingResult = progGen();
    if (ansInputAndCheck(playerName, missingResult)) { correctAnss += 1; } else { break; }
  } while (correctAnss < 3); // счётчик корректных ответов
  afterword(playerName, correctAnss === 3);
};
export default progression;
