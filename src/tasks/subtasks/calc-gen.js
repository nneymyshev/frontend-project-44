/* eslint-disable linebreak-style */
const calcGenAndResult = () => {
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
  return calcResult;
};
export default calcGenAndResult;
