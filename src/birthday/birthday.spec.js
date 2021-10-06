import { birthday } from "./birthday";

describe("birthday", () => {
  it("should return the number of ways the chocolate bar can be divided", () => {
    expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
    expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
    expect(birthday([4], 4, 1)).toBe(1);
  });
});
