import { catAndMouse } from "./catAndMouse";

describe("catAndMouse", () => {
  it("should print cat name if it gets the mouse first", () => {
    expect(catAndMouse(1, 2, 3)).toBe("Cat B");
    expect(catAndMouse(1, 5, 2)).toBe("Cat A");
    expect(catAndMouse(3, 2, 1)).toBe("Cat B");
  });

  it("should print mouse if it gets away", () => {
    expect(catAndMouse(2, 2, 3)).toBe("Mouse C");
    expect(catAndMouse(1, 3, 2)).toBe("Mouse C");
    expect(catAndMouse(2, 2, 1)).toBe("Mouse C");
  });
});
