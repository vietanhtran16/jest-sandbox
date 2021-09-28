export const nextBigger = (number) => {
  if (areAllDigitSame(number)) {
    return -1;
  }
  return 10;
};

const areAllDigitSame = (number) => {
  const digits = number.toString().split("");
  const sum = digits.reduce((total, digit) => total + parseInt(digit), 0);
  return sum % digits.length === 0;
};
