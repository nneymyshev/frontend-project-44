/* eslint-disable linebreak-style */
import genRandomInteger from '../commons/genRandom.js';

const evenGen = () => {
  const questionAndResult = {
    question: 0,
    result: 'no',
  };
  questionAndResult.question = genRandomInteger(1, 999); // генерируем случайное целое
  if (questionAndResult.question % 2 === 0) { questionAndResult.result = 'yes'; } // собственно проверка на чётность
  return questionAndResult; // возвращаем корректный ответ
};
export default evenGen;
