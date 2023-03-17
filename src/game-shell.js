/* eslint-disable no-unused-vars */
import askForName from './cli.js'; // импорт функции запроса имени игрока
import bgGreeting from './greeting.js'; // импорт функции приветствия
import evennum from './tasks/evennum.js';
import calc from './tasks/calc.js';

bgGreeting();
const playerName = askForName();

const gameShell = (taskName) => { // параметр - имя задачи, в зависимости от вызывающего скрипта
  const taskResult = eval(taskName + '()'); // прогон и получение результата задачи
  if (taskResult) {
    console.log(`Congratulations, ${playerName}!`); // поздравительная речь в случае успеха
  } else {
    console.log(`Let's try again, ${playerName}!`); // поддерживающая речь в случае неудачи
  }
};
export default gameShell;
