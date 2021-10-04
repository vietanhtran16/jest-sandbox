export function gradingStudents(grades) {
  return grades.map((grade) => {
    const remainder = grade % 5;
    if (grade < 38 || remainder < 3) {
      return grade;
    }
    return grade + (5 - remainder);
  });
}
