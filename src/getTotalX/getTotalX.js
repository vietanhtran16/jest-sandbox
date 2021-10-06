export function getTotalX(a, b) {
  let possibleFactorsOfB = [];
  for (let number = a[a.length - 1]; number <= b[0]; number++) {
    const allAElementsAreFactor = a.every(
      (aElement) => number % aElement === 0
    );
    if (allAElementsAreFactor) {
      possibleFactorsOfB.push(number);
    }
  }
  return possibleFactorsOfB.filter((number) =>
    b.every((bElement) => bElement % number === 0)
  ).length;
}
