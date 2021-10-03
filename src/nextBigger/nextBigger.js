export const nextBigger = (number) => {
  if (areAllDigitSame(number)) {
    return -1;
  }
  const digits = number.toString().split("");
  for (let index = digits.length - 1; index > -1; index--) {
    const nextBiggerNumber = findNextBiggerNumber(digits, index);
    if (nextBiggerNumber) {
      return nextBiggerNumber;
    }
  }
  return -1;
};

const areAllDigitSame = (number) => {
  const digits = number.toString().split("");
  const differentDigits = digits.filter((digit) => digit !== digits[0]);
  return !differentDigits.length;
};

const findNextBiggerNumber = (digits, currentDigitIndex) => {
  const currentDigit = digits[currentDigitIndex];
  const digitsToTheRight = sortDigitsToTheRight(digits, currentDigitIndex);
  const biggerDigitIndex = digitsToTheRight.findIndex(
    (digit) => digit > currentDigit
  );
  const hasFoundBiggerDigit = biggerDigitIndex > -1;
  if (hasFoundBiggerDigit) {
    return createBiggerNumber(
      currentDigitIndex,
      biggerDigitIndex,
      digits,
      digitsToTheRight
    );
  }
};

const sortDigitsToTheRight = (digits, currentDigitIndex) => {
  return digits.slice(currentDigitIndex).sort((a, b) => a - b);
};

const createBiggerNumber = (
  currentDigitIndex,
  biggerDigitIndex,
  digits,
  digitsToTheRight
) => {
  const digitsToTheRightWithoutBiggerDigit = [
    ...digitsToTheRight.slice(0, biggerDigitIndex),
    ...digitsToTheRight.slice(biggerDigitIndex + 1),
  ];
  const nextBiggerNumber = [
    ...digits.slice(0, currentDigitIndex),
    digitsToTheRight[biggerDigitIndex],
    ...digitsToTheRightWithoutBiggerDigit,
  ].join("");
  return parseInt(nextBiggerNumber);
};
