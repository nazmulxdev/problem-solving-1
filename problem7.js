// problem 7: find even number in an array

function findEven(numbersArray) {
  try {
    let evenArray = [];
    for (const number of numbersArray) {
      if (number % 2 === 0) {
        evenArray.push(number);
      }
    }
    return evenArray;
  } catch (error) {
    return null;
  }
}

