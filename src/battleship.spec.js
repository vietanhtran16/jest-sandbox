import { add } from "./battleship";

describe("Battleship", () => {
    it('should add', () => {
        expect(add(1,2)).toEqual(3);
    })
})