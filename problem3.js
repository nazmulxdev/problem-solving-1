// check for palindrome

function palindromeChecker(string) {
  try {
    const forward = string.toLowerCase();
    let reverse = "";
    for (const str of string) {
      reverse = str + reverse;
    }
    const finalReverse = reverse.toLowerCase();
    if (forward === finalReverse) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
