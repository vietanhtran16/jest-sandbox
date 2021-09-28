export const nextBigger = (number) => {
  if (areAllDigitSame(number)) {
    return -1;
  }
  const digits = number.toString().split("");
  for (let index = digits.length - 1; index > -1; index--) {
    const digitToTheRightIndex = index + 1;
    const digitToTheRight = digits[digitToTheRightIndex];
    const currentDigit = digits[index];
    const newNumber = [...digits];
    newNumber[index] = digitToTheRight;
    newNumber[digitToTheRightIndex] = currentDigit;
    const potentialNextBiggerNumber = parseInt(newNumber.join(""));
    if (potentialNextBiggerNumber > number) {
      return potentialNextBiggerNumber;
    }
  }
  return -1;
};

const areAllDigitSame = (number) => {
  const digits = number.toString().split("");
  const differentDigits = digits.filter((digit) => digit !== digits[0]);
  return !differentDigits.length;
};
