// https://www.hackerrank.com/challenges/divisible-sum-pairs
export function divisibleSumPairs(n, k, ar) {
  return ar.reduce((total, currentNumber, index) => {
    const restOfNumber = ar.slice(index + 1);
    const pairsDivisibleByK = restOfNumber.filter(
      (number) => (number + currentNumber) % k === 0
    ).length;
    return total + pairsDivisibleByK;
  }, 0);
}
