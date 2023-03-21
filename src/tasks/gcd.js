/* eslint-disable linebreak-style */
import bgGreeting from './subtasks/printGreeting.js';
import askForName from './subtasks/cli.js';
import gcdPairGen from './subtasks/createQuestGcd.js';
import ansInputAndCheck from './subtasks/inputAndCheck.js';
import afterword from './subtasks/printFarewell.js';

bgGreeting();
const gcd = () => {
  const playerName = askForName();
  let correctAnss = 0;
  console.log('Find the greatest common divisor of given numbers.');
  do {
    /* след.строка: генерация и вывод выражения + расчет целевого результата
    не является общей подзадачей, аутсорс сделан сугубо для разгрузки файла */
    const gcdResult = gcdPairGen();
    if (ansInputAndCheck(playerName, gcdResult, correctAnss)) { correctAnss += 1; } else { break; }
  } while (correctAnss < 3); // счётчик корректных ответов
  afterword(playerName, correctAnss === 3);
};
export default gcd;
