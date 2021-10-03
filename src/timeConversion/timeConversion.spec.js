import { timeConversion } from "./timeConversion";

describe("timeConversion", () => {
  it("should convert time to military time", () => {
    expect(timeConversion("12:01:00PM")).toBe("12:01:00");
    expect(timeConversion("12:01:00AM")).toBe("00:01:00");
    expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  });
});
