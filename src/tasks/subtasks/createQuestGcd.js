/* eslint-disable linebreak-style */
const gcdPairGen = () => {
/* генерируем два числа и вычисляем сам делитель */
  let basis = Math.ceil(Math.random() * 11);
  if (basis === 10) { basis = 9; }
  let numOne;
  let numTwo;
  do {
    numOne = basis * Math.ceil(Math.random() * 10); // генерируем первое число пары
    numTwo = basis * Math.ceil(Math.random() * 10); // ...второе число пары
  } while (numOne === numTwo); // избегаем совпадения чисел в паре
  console.log(`Question: ${numOne} ${numTwo}`);
  /* реализуем алгоритм Евклида */
  do {
    if (numOne > numTwo) { numOne -= numTwo; } else { numTwo -= numOne; }
  } while (numOne !== numTwo);
  return numOne; // возвращаем правильный результат для передачи на проверку
};
export default gcdPairGen;
