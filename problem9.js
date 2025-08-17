// problem 9 : find the factorial of a number;

function factorial(number) {
  try {
    if (number < 0) {
      return null;
    } else {
      let fact = 1;
      for (let i = 1; i <= number; i++) {
        fact = fact * i;
      }
      return fact;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
