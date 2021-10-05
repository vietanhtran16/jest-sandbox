import { kangaroo } from "./kangaroo";

describe("kangaroo", () => {
  it("should return yes/no whether the 2 kangaroos would meet at the same location", () => {
    expect(kangaroo(0, 2, 5, 3)).toBe("NO");
    expect(kangaroo(0, 3, 4, 2)).toBe("YES");
    expect(kangaroo(1, 3, 4, 2)).toBe("YES");
    expect(kangaroo(21, 6, 47, 3)).toBe("NO");
    expect(kangaroo(43, 2, 70, 2)).toBe("NO");
  });
});
