/* eslint-disable linebreak-style */
import ansInputAndCheck from './subtasks/ans-input-and-check.js';
import gcdPairGen from './subtasks/gcd-gen.js';

const gcd = () => {
  let correctAnss = 0;
  console.log('Find the greatest common divisor of given numbers.');
  do {
    /* след.строка: генерация и вывод выражения + расчет целевого результата
    не является общей подзадачей, аутсорс - для разгрузки файла */
    const gcdResult = gcdPairGen();
    if (ansInputAndCheck(gcdResult)) { correctAnss += 1; } else { break; }
  } while (correctAnss < 3); // счётчик корректных ответов
  return correctAnss === 3;
};
export default gcd;
