// https://www.hackerrank.com/challenges/the-birthday-bar/problem
export function birthday(chocoSquares, day, month) {
  return chocoSquares.reduce((waysToDivideTheBar, _, index) => {
    if (chocoSquares.length - index < month) {
      return waysToDivideTheBar;
    }
    const numbersWithMonthAsLength = chocoSquares
      .slice(index, index + month)
      .reduce((total, number) => total + number, 0);
    if (numbersWithMonthAsLength === day) {
      return waysToDivideTheBar + 1;
    }
    return waysToDivideTheBar;
  }, 0);
}
