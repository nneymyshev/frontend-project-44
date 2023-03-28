import calcGenAndResult from './specials/createQuestCalc.js';
import evenGen from './specials/createQuestEven.js';
import progGen from './specials/createQuestProg.js';
import primeGen from './specials/createQuestPrime.js';
import gcdPairGen from './specials/createQuestGcd.js';

const chooseGame = (calledFrom) => {
  let gameToExecute;
  switch (calledFrom) {
    case ('brain-calc'):
      console.log('What is the result of the expression?');
      gameToExecute = calcGenAndResult;
      break;
    case ('brain-gcd'):
      console.log('Find the greatest common divisor of given numbers.');
      gameToExecute = gcdPairGen;
      break;
    case ('brain-even'):
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      gameToExecute = evenGen;
      break;
    case ('brain-progression'):
      console.log('What number is missing in the progression?');
      gameToExecute = progGen;
      break;
    case ('brain-prime'):
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      gameToExecute = primeGen;
      break;
    default:
  }
  return gameToExecute;
};
export default chooseGame;
