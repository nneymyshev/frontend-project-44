/* eslint-disable linebreak-style */
const primeGen = () => {
  let num = Math.ceil(Math.random() * 1000);
  if (num < 9) { num = 9; }
  console.log(`Question: ${num}`);
  let isPrime = 'yes';
  if (num % 2 === 0) { return 'no'; }
  for (let d = 3; d <= Math.ceil(Math.sqrt(num)); d += 2) {
    if (num % d === 0) {
      isPrime = 'no';
      return isPrime;
    }
  }
  return isPrime;
};
export default primeGen;
