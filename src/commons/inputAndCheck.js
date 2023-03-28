import readlineSync from 'readline-sync';

const ansInputAndCheck = (correctAns) => {
  const ans = readlineSync.question('Your answer: '); // запрашиваем у пользователя ответ
  if (String(ans) === String(correctAns)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
  return false;
};
export default ansInputAndCheck;
