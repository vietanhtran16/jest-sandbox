import { pageCount } from "./pageCount";

describe("pageCount", () => {
  it("should return minmum number of pages to turn to get to desired page", () => {
    expect(pageCount(6, 2)).toBe(1);
    expect(pageCount(5, 4)).toBe(0);
    expect(pageCount(5, 2)).toBe(1);
    expect(pageCount(5, 3)).toBe(1);
    expect(pageCount(2, 1)).toBe(0);
    expect(pageCount(6, 3)).toBe(1);
  });
});
