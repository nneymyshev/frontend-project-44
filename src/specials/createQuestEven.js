/* eslint-disable linebreak-style */
const evenGen = (prevNum) => {
  let isEven = 'no'; // характеристика по умолчанию
  let newToIdentify = 0;
  do { // цикл для отсева повторяющихся чисел.
    newToIdentify = Math.floor(Math.random() * 100); // генерируем случайное целое
    if (newToIdentify % 2 === 0) { isEven = 'yes'; } // собственно проверка на чётность
    console.log(`Question: ${newToIdentify}`);
  } while (newToIdentify === prevNum);
  return isEven; // возвращаем корректный ответ и трекинг предыдущего значения
};
export default evenGen;
