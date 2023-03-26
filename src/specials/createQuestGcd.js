/* eslint-disable linebreak-style */
import genRandomInteger from '../commons/genRandom.js';

const gcdPairGen = () => {
  /* генерируем два числа и вычисляем сам делитель */
  let basis = genRandomInteger(2, 99);
  if (basis % 10 === 0) { basis -= 1; }
  let numOne;
  let numTwo;
  const questionAndResult = {};
  do {
    numOne = basis * genRandomInteger(1, 9); // генерируем первое число пары
    numTwo = basis * genRandomInteger(1, 9); // ...второе число пары
  } while (numOne === numTwo); // избегаем совпадения чисел в паре
  questionAndResult.question = `${numOne} ${numTwo}`;
  /* реализуем алгоритм Евклида */
  do {
    if (numOne > numTwo) { numOne -= numTwo; } else { numTwo -= numOne; }
  } while (numOne !== numTwo);
  questionAndResult.result = numOne;
  return questionAndResult; // возвращаем правильный результат для передачи на проверку
};
export default gcdPairGen;
