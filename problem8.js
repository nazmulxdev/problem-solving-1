// problem 8 : capitalize first letter of each word

function capitalizeEachWord(string) {
  try {
    let newArrayOfString = string.split(" ");
    let finalArrayOfString = [];
    for (const value of newArrayOfString) {
      const newValue = [];
      for (let i = 0; i < value.length; i++) {
        if (i === 0) {
          const firstLetter = value[0].toUpperCase();
          newValue.push(firstLetter);
        } else {
          newValue.push(value[i]);
        }
      }
      finalArrayOfString.push(newValue.join(""));
    }
    return finalArrayOfString.join(" ");
  } catch (error) {
    console.log(error);
    return null;
  }
}
