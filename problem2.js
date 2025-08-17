// problem 2: count vowels in a string

function countVowels(string) {
  try {
    let count = 0;
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for (const str of string) {
      for (const vow of vowels) {
        if (vow === str) {
          count = count + 1;
        }
      }
    }

    return count;
  } catch (error) {
    console.log(error);
    return null;
  }
}

