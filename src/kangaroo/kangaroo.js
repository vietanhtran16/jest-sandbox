export function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) {
    return "NO";
  }
  return haveTheyMet(x1, v1, x2, v2);
}

function haveTheyMet(x1, v1, x2, v2) {
  if (x1 > x2) {
    return "NO";
  } else if (x1 === x2) {
    return "YES";
  }
  return haveTheyMet(x1 + v1, v1, x2 + v2, v2);
}
