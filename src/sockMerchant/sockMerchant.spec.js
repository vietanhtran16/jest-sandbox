import { sockMerchant } from "./sockMerchant";

describe("sockMerchant", () => {
  it("should", () => {
    expect(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });
});
