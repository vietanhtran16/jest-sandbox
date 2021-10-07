// https://www.hackerrank.com/challenges/migratory-birds
export function migratoryBirds(arr) {
  const countOfEachBird = arr.reduce(
    (count, birdTypeId) => ({
      ...count,
      [birdTypeId]: count[birdTypeId] ? count[birdTypeId] + 1 : 1,
    }),
    {}
  );
  const mostSightedCount = Object.values(countOfEachBird).sort(
    (a, b) => b - a
  )[0];
  return Object.keys(countOfEachBird)
    .filter((birdTypeId) => countOfEachBird[birdTypeId] === mostSightedCount)
    .map((id) => parseInt(id))
    .sort((a, b) => a - b)[0];
}
