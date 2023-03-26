/* eslint-disable linebreak-style */
const genRandomInteger = (min, max) => {
  const randInt = min + Math.floor((max - min) * Math.random());
  return randInt;
};
export default genRandomInteger;
