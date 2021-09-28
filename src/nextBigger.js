export const nextBigger = (number) => {
  if (areAllDigitSame(number)) {
    return -1;
  }
  const digits = number.toString().split("");
  for (let index = digits.length - 1; index > -1; index--) {
    const currentDigit = digits[index];
    const digitsToTheRight = digits.slice(index).sort((a, b) => a - b);
    const nextBiggerDigit = digitsToTheRight.find(
      (digit) => digit > currentDigit
    );
    if (nextBiggerDigit) {
      const nextBiggerDigitIndex = digitsToTheRight.indexOf(nextBiggerDigit);
      const digitsToTheRightWithoutBiggerDigit = [
        ...digitsToTheRight.slice(0, nextBiggerDigitIndex),
        ...digitsToTheRight.slice(nextBiggerDigitIndex + 1),
      ];
      const nextBiggerNumber = [
        ...digits.slice(0, index),
        nextBiggerDigit,
        ...digitsToTheRightWithoutBiggerDigit,
      ].join("");
      return parseInt(nextBiggerNumber);
    }
  }
  return -1;
};

const areAllDigitSame = (number) => {
  const digits = number.toString().split("");
  const differentDigits = digits.filter((digit) => digit !== digits[0]);
  return !differentDigits.length;
};
