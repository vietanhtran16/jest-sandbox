import { countingValleys } from "./countingValleys";

describe("countingValleys", () => {
  it("should return the number of valleys the hiker goes through", () => {
    expect(countingValleys(8, "UDDDUDUU")).toBe(1);
    expect(countingValleys(8, "DDUUUUDD")).toBe(1);
  });
});
