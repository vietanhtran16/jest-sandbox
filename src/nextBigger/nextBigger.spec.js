import { nextBigger } from "./nextBigger";

describe("nextBigger", () => {
  it("should return true when field is valid", () => {
    expect(nextBigger(111)).toBe(-1);
    expect(nextBigger(9)).toBe(-1);
    expect(nextBigger(555555)).toBe(-1);
    expect(nextBigger(12)).toBe(21);
    expect(nextBigger(513)).toBe(531);
    expect(nextBigger(2017)).toBe(2071);
    expect(nextBigger(414)).toBe(441);
    expect(nextBigger(144)).toBe(414);
    expect(nextBigger(275)).toBe(527);
    expect(nextBigger(378421)).toBe(381247);
    expect(nextBigger(1234567890)).toBe(1234567908);
  });
});
