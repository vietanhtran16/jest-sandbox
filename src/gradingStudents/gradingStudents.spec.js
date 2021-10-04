import { gradingStudents } from "./gradingStudents";

describe("gradingStudents", () => {
  it("should return rounded grades", () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
    expect(gradingStudents([53, 87, 99, 21])).toEqual([55, 87, 100, 21]);
  });
});
