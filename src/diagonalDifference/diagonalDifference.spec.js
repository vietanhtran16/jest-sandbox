import { diagonalDifference } from "./diagonalDifference";

describe("diagonalDifference", () => {
  it("should calcuialate diagonal difference", () => {
    expect(
      diagonalDifference([
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9],
      ])
    ).toBe(2);

    expect(
      diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ])
    ).toBe(15);
  });
});
