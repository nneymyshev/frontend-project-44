/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

const evennum = () => {
  let prevNum = 0;
  let correctAnss = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  do {
    const newToIdentify = Math.floor(Math.random() * 100); // генерируем случайное целое
    // eslint-disable-next-line no-continue
    if (newToIdentify === prevNum) continue; // если число повторяется, пропускаем его

    prevNum = newToIdentify; // перезаписываем значение "предыдущего"

    let isEven = 'no'; // характеристика по умолчанию
    if (newToIdentify % 2 === 0) { // собственно проверка на чётность
      isEven = 'yes';
    }

    console.log(`Question: ${newToIdentify}`);

    const ans = readlineSync.question('Your answer: '); // запрашиваем у пользователя ответ

    if (ans === isEven) { // отработка ответа
      console.log('Correct!');
      correctAnss += 1;
    } else {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      break;
    }
  } while (correctAnss < 3); // счётчик корректных ответов
  return correctAnss === 3;
};

export default evennum;
