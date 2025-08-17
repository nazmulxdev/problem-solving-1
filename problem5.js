// problem 5: Remove Duplicates from an array

function removeDuplicates(array) {
  try {
    let finalArray = [];
    for (const num of array) {
      if (!finalArray.includes(num)) {
        finalArray.push(num);
      }
    }
    return finalArray;
  } catch (error) {
    return null;
  }
}

