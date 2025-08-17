// sum of all numbers in an array

function sumOfArray(numbersArray) {
  try {
    let total = 0;
    for (const number of numbersArray) {
      total = number + total;
    }

    return total;
  } catch (error) {
    console.log(error);
    return null;
  }
}

