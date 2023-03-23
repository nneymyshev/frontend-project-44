/* eslint-disable linebreak-style */
const progGen = () => {
  /* генерируем отправное число прогрессии, шаг, и длину ряда */
  let elem = Math.ceil(Math.random() * 10);
  let step = Math.ceil(Math.random() * 5);
  let len = Math.ceil(Math.random() * 10);
  if (len < 5 || len > 10) { len = 7; }
  const missingPos = len - Math.floor(len * Math.random());
  if (step <= 1) { step = 3; }
  let progString = ''; // elem.toString();
  let missElem;
  /* в цикле формируем строку прогресии */
  for (let pos = 1; pos <= len; pos += 1) {
    if (pos === missingPos) {
      progString += ' ..';
      missElem = elem;
    } else { progString += ` ${elem}`; }
    elem += step;
  }
  console.log(`Question: ${progString}`);
  return missElem; // возвращаем правильный результат для передачи на проверку
};
export default progGen;
