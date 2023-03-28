import genRandomInteger from '../commons/genRandom.js';

const progGen = () => {
  /* генерируем отправное число прогрессии, шаг, и длину ряда */
  let element = genRandomInteger(0, 99);
  const step = genRandomInteger(2, 9);
  const length = genRandomInteger(5, 10);
  const missingPos = genRandomInteger(1, length);
  let progString = '';
  let missElem;
  /* в цикле формируем строку прогресии */
  for (let pos = 1; pos <= length; pos += 1) {
    if (pos === missingPos) {
      progString += '.. ';
      missElem = element;
    } else { progString += `${element} `; }
    element += step;
  }
  progString = progString.trimEnd();
  const questionAndResult = {
    question: progString,
    result: missElem,
  };
  return questionAndResult; // возвращаем правильный результат для передачи на проверку
};
export default progGen;
