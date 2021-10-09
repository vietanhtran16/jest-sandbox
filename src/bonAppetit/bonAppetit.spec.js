import { bonAppetit } from "./bonAppetit";

describe("bonAppetit", () => {
  beforeEach(() => jest.resetAllMocks());
  it("should print Bon Appetit if Brian did not overcharged Anna", () => {
    const logSpy = jest.spyOn(console, "log");

    bonAppetit([3, 10, 2, 9], 1, 7);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Bon Appetit");
  });

  it("should return amount that Brian must refund if Brian overcharged Anna", () => {
    const logSpy = jest.spyOn(console, "log");

    bonAppetit([3, 10, 2, 9], 1, 12);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(5);
  });
});
