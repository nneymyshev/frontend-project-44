/* eslint-disable linebreak-style */
import ansInputAndCheck from './subtasks/ans-input-and-check.js';
import calcGenAndResult from './subtasks/calc-gen.js';

const calc = () => {
  let correctAnss = 0;
  console.log('What is the result of the expression?');
  do {
    /* след.строка: генерация и вывод выражения + расчет целевого результата
    не является общей подзадачей, аутсорс - для разгрузки файла */
    const calcResult = calcGenAndResult();
    if (ansInputAndCheck(calcResult)) { correctAnss += 1; } else { break; }
  } while (correctAnss < 3);
  return correctAnss === 3;
};
export default calc;
