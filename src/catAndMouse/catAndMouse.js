// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
export function catAndMouse(catAPosition, catBPosition, mousePosition) {
  const catAToMouse = Math.abs(mousePosition - catAPosition);
  const catBToMouse = Math.abs(mousePosition - catBPosition);
  return catAToMouse === catBToMouse
    ? "Mouse C"
    : catAToMouse > catBToMouse
    ? "Cat B"
    : "Cat A";
}
