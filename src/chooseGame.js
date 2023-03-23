/* eslint-disable linebreak-style */
import calcGenAndResult from './specials/createQuestCalc.js';
import evenGen from './specials/createQuestEven.js';
import progGen from './specials/createQuestProg.js';
import primeGen from './specials/createQuestPrime.js';
import gcdPairGen from './specials/createQuestGcd.js';

const choose = (calledFrom) => {
  let funcToExecute;
  switch (calledFrom) {
    case ('brain-calc'):
      console.log('What is the result of the expression?');
      funcToExecute = calcGenAndResult;
      break;
    case ('brain-gcd'):
      console.log('Find the greatest common divisor of given numbers.');
      funcToExecute = gcdPairGen;
      break;
    case ('brain-even'):
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      funcToExecute = evenGen;
      break;
    case ('brain-progression'):
      console.log('What number is missing in the progression?');
      funcToExecute = progGen;
      break;
    case ('brain-prime'):
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      funcToExecute = primeGen;
      break;
    default:
  }
  return funcToExecute;
};
export default choose;
