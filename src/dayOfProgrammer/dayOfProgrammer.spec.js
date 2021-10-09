import { dayOfProgrammer } from "./dayOfProgrammer";

describe("dayOfProgrammer", () => {
  it("should return a string representing 265th day of the year in Russian calendar (Julian)", () => {
    expect(dayOfProgrammer("2017")).toBe("13.09.2017");
    expect(dayOfProgrammer("2016")).toBe("12.09.2016");
    expect(dayOfProgrammer("1800")).toBe("12.09.1800");
    expect(dayOfProgrammer("1918")).toBe("26.09.1918");
    expect(dayOfProgrammer("2100")).toBe("13.09.2100");
  });
});
