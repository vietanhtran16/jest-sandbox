function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesOnSamHouse = countFruitOnSamHouse(apples, a, s, t);
  const orangesOnSamHouse = countFruitOnSamHouse(oranges, b, s, t);
  console.log(applesOnSamHouse);
  console.log(orangesOnSamHouse);
}

function countFruitOnSamHouse(
  fruits,
  treePosition,
  samHouseStartPosition,
  samHouseEndPosition
) {
  return fruits
    .map((apple) => apple + treePosition)
    .filter(
      (position) =>
        samHouseStartPosition <= position && position <= samHouseEndPosition
    ).length;
}
