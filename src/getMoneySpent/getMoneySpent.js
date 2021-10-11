// https://www.hackerrank.com/challenges/electronics-shop/problem
export function getMoneySpent(keyboards, drives, budget) {
  return keyboards.reduce((biggestSum, keyboard) => {
    const sortedDescPossibleTotals = drives
      .map((drive) => drive + keyboard)
      .sort((a, b) => b - a);
    const biggestSumUnderBudget = sortedDescPossibleTotals.find(
      (total) => total <= budget && total > biggestSum
    );
    return biggestSumUnderBudget ? biggestSumUnderBudget : biggestSum;
  }, -1);
}
