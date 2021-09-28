export const nextBigger = (number) => {
  if (areAllDigitSame(number)) {
    return -1;
  }
  const digits = number.toString().split("");
  const lastDigit = digits[digits.length - 1];
  const secondToLastDigit = digits[digits.length - 2];
  const nextBiggerNumber = [
    ...digits.slice(0, digits.length - 2),
    lastDigit,
    secondToLastDigit,
  ].join("");
  return parseInt(nextBiggerNumber);
};

const areAllDigitSame = (number) => {
  const digits = number.toString().split("");
  const differentDigits = digits.filter((digit) => digit !== digits[0]);
  return !differentDigits.length;
};
