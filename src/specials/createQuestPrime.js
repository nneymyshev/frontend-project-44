/* eslint-disable linebreak-style */
import genRandomInteger from '../commons/genRandom.js';

const primeGen = () => {
  const num = genRandomInteger(1, 999);
  let whetherPrime = '';
  while (whetherPrime === '') {
    if (num === 2 || num === 3 || num === 5 || num === 7) { whetherPrime = 'yes'; break; }
    if (num === 1 || num === 4 || num === 5 || num === 8) { whetherPrime = 'no'; break; }
    if (num % 2 === 0) { whetherPrime = 'no'; break; }
    for (let d = 3; d <= Math.ceil(Math.sqrt(num)); d += 2) {
      if (num % d === 0) { whetherPrime = 'no'; break; }
    }
    if (whetherPrime === '') { whetherPrime = 'yes'; }
  }
  const questionAndResult = {
    question: num,
    result: whetherPrime,
  };
  return questionAndResult; // возвращаем правильный результат для передачи на проверку
};
export default primeGen;
