// https://www.hackerrank.com/challenges/day-of-the-programmer
export function dayOfProgrammer(year) {
  const yearRussiaMadeChangedCalendar = 1918;
  const parsedYear = parseInt(year);
  if (parsedYear === yearRussiaMadeChangedCalendar) {
    return `26.09.1918`;
  }

  if (parsedYear < yearRussiaMadeChangedCalendar) {
    return isLeapJulianYear(parsedYear)
      ? day256OfLeapYear(year)
      : day256OfNonLeapYear(year);
  }
  return isLeapGregorianYear(parsedYear)
    ? day256OfLeapYear(year)
    : day256OfNonLeapYear(year);
}

function isLeapGregorianYear(parsedYear) {
  return (
    parsedYear % 400 === 0 || (parsedYear % 4 === 0 && parsedYear % 100 !== 0)
  );
}

function isLeapJulianYear(parsedYear) {
  return parsedYear % 4 === 0;
}

function day256OfLeapYear(year) {
  return `12.09.${year}`;
}
function day256OfNonLeapYear(year) {
  return `13.09.${year}`;
}
