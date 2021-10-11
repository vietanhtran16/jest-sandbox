import { getMoneySpent } from "./getMoneySpent";

describe("getMoneySpent", () => {
  it("should return max that can be spent for both keyboard and drive", () => {
    expect(getMoneySpent([3, 1], [5, 2, 8], 10)).toBe(9);
  });

  it("should return -1 if there is no way to buy both keyboard and drive", () => {
    expect(getMoneySpent([4], [5], 5)).toBe(-1);
    expect(getMoneySpent([4], [5], 7)).toBe(-1);
  });
});
