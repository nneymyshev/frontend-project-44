/* eslint-disable linebreak-style */
const afterword = (playerName, taskDone) => {
  if (taskDone) {
    console.log(`Congratulations, ${playerName}!`); // поздравительная речь в случае успеха
  } else {
    console.log(`Let's try again, ${playerName}!`); // поддерживающая речь в случае неудачи
  }
};
export default afterword;
