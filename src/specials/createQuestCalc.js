/* eslint-disable linebreak-style */
import genRandomInteger from '../commons/genRandom.js';

const calcGenAndResult = () => {
  let calcResult;
  let arithmAction;
  const numOne = genRandomInteger(1, 999); // генерируем операнд #1
  const actionRandomizer = Math.random(); // генерируем фактор арифм.действия
  let numTwo = genRandomInteger(1, 999); // генерируем операнд #2

  switch (true) { // составляем выражение и считаем результат для проверки
    case (actionRandomizer < 0.333):
      calcResult = numOne + numTwo;
      arithmAction = '+';
      break;
    case (actionRandomizer < 0.667):
      if (numTwo >= numOne) { numTwo = Math.floor(numOne * Math.random()); }
      calcResult = numOne - numTwo;
      arithmAction = '-';
      break;
    default:
      calcResult = numOne * numTwo;
      arithmAction = '*';
  }
  const questionAndResult = {
    question: `${numOne} ${arithmAction} ${numTwo}`,
    result: calcResult,
  };
  return questionAndResult; // возвращаем правильный результат для передачи на проверку
};
export default calcGenAndResult;
