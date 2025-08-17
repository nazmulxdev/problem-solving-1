// problem -1 : reverse a string

function reverseString(string) {
  try {
    let reverse = "";
    for (const str of string) {
      reverse = str + reverse;
    }
    return reverse;
  } catch (error) {
    return null;
  }
}
