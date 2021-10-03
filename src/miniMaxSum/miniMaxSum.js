function miniMaxSum(arr) {
  const sortedNumbers = arr.sort((a, b) => a - b);
  const minumSum = sortedNumbers
    .slice(0, sortedNumbers.length - 1)
    .reduce((sum, number) => sum + number, 0);
  const maxSum = sortedNumbers
    .slice(1)
    .reduce((sum, number) => sum + number, 0);
  console.log(`${minumSum} ${maxSum}`);
}
