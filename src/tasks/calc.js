/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

const calc = () => {
  let correctAnss = 0;
  console.log('What is the result of the expression?');

  do {
    let calcResult;
    const numOne = Math.floor(Math.random() * 100); // генерируем операнд #1
    const numTwo = Math.floor(Math.random() * 100); // генерируем операнд #2

    const actionRandomizer = Math.random(); // генерируем фактор арифм.действия
    switch (true) { // составляем выражение и считаем результат для проверки
      case (actionRandomizer < 0.333):
        calcResult = numOne + numTwo;
        console.log(`Question: ${numOne} + ${numTwo}`);
        break;
      case (actionRandomizer < 0.667):
        calcResult = numOne - numTwo;
        console.log(`Question: ${numOne} - ${numTwo}`);
        break;
      default:
        calcResult = numOne * numTwo;
        console.log(`Question: ${numOne} * ${numTwo}`);
    }

    const ans = readlineSync.question('Your answer: '); // запрашиваем у пользователя ответ

    if (Number(ans) === calcResult) { // отработка ответа
      console.log('Correct!');
      correctAnss += 1;
    } else {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${calcResult}'.`);
      break;
    }
  } while (correctAnss < 3);
  return correctAnss === 3;
};

export default calc;
