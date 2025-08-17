// find the maximum number

function maxNumber(numbers) {
  try {
    let maximumNumber = 0;
    for (const number of numbers) {
      if (number > maximumNumber) {
        maximumNumber = number;
      } else {
        maximumNumber = maximumNumber;
      }
    }
    return maximumNumber;
  } catch (error) {
    console.log(error);
    return null;
  }
}

