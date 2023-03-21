/* eslint-disable linebreak-style */
import ansInputAndCheck from './subtasks/ans-input-and-check.js';

const evennum = () => {
  let prevNum = 0;
  let correctAnss = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  do {
    /* в этом таске генерация задания реализована прямо в теле таска, так как она не
    слишком громоздкая */
    const newToIdentify = Math.floor(Math.random() * 100); // генерируем случайное целое
    // eslint-disable-next-line no-continue
    if (newToIdentify === prevNum) continue; // если число повторяется, пропускаем его
    prevNum = newToIdentify; // перезаписываем значение "предыдущего"
    let isEven = 'no'; // характеристика по умолчанию
    if (newToIdentify % 2 === 0) { // собственно проверка на чётность
      isEven = 'yes';
    }
    console.log(`Question: ${newToIdentify}`);
    if (ansInputAndCheck(isEven)) { correctAnss += 1; } else { break; }
  } while (correctAnss < 3); // счётчик корректных ответов
  return correctAnss === 3;
};
export default evennum;
