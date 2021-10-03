function staircase(n) {
  printStep(1, n, "#");
}

function printStep(step, stairHeight, symbol) {
  if (step < stairHeight + 1) {
    const spaces = Array(stairHeight - step).fill(" ");
    const symbols = Array(step).fill(symbol);
    console.log([...spaces, ...symbols].join(""));
    printStep(step + 1, stairHeight, "#");
  }
}
