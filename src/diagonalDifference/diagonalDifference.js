export function diagonalDifference(arr) {
  const reverseArr = arr.map((row) => [...row].reverse());
  const primaryDiagonalSum = sum(getDiagonalNumbers(arr, 0, []));
  const secondaryDiagonalSum = sum(getDiagonalNumbers(reverseArr, 0, []));
  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

function getDiagonalNumbers([firstRow, ...rest], currentColumn, numbers) {
  if (rest.length) {
    return getDiagonalNumbers(rest, currentColumn + 1, [
      ...numbers,
      firstRow[currentColumn],
    ]);
  }
  return [...numbers, firstRow[currentColumn]];
}

function sum(arr) {
  return arr.reduce((sum, number) => sum + number, 0);
}
