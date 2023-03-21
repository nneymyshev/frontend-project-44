/* eslint-disable linebreak-style */
import bgGreeting from './subtasks/printGreeting.js';
import askForName from './subtasks/cli.js';
import calcGenAndResult from './subtasks/createQuestCalc.js';
import ansInputAndCheck from './subtasks/inputAndCheck.js';
import afterword from './subtasks/printFarewell.js';

bgGreeting();
const calc = () => {
  const playerName = askForName();
  let correctAnss = 0;
  console.log('What is the result of the expression?');
  do {
    /* след.строка: генерация и вывод выражения + расчет целевого результата
    не является общей подзадачей, аутсорс - для разгрузки файла */
    const calcResult = calcGenAndResult();
    /* след. строка: проверка правильности введенного ответа
    и сопутствующие консольные выводы" */
    if (ansInputAndCheck(playerName, calcResult)) { correctAnss += 1; } else { break; }
  } while (correctAnss < 3); // счётчик корректных ответов
  afterword(playerName, correctAnss === 3);
};
export default calc;
