import { getTotalX } from "./getTotalX";

describe("getTotalX", () => {
  it(`should return number of intergers that elements of first array are all factors of and 
    the integer being considered is a factor of all elements of the secodn array`, () => {
    expect(getTotalX([2, 6], [24, 36])).toBe(2);
    expect(getTotalX([2, 4], [16, 32, 96])).toBe(3);
  });
});
