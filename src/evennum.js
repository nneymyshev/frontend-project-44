import readlineSync from 'readline-sync';

const evenNum = (playerName) => {
  let prevNum = 0;
  let correctAnss = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  do {
    const newToIdentify = Math.floor(Math.random() * 100); // генерируем случайное целое
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
      correctAnss = 0;
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  } while (correctAnss < 3); // счётчик корректных ответов

  if (correctAnss === 3) console.log(`Congratulations, ${playerName}!`); // поздравительная речь в случае успеха
};

export default evenNum;
