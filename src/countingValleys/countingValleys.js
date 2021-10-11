// https://www.hackerrank.com/challenges/counting-valleys/problem
export function countingValleys(_, path) {
  const { valleysEntered } = path.split("").reduce(
    ({ valleysEntered, positionToSeaLvl }, step) => {
      const newPosition = isGoingUp(step)
        ? positionToSeaLvl + 1
        : positionToSeaLvl - 1;
      if (isBelowSeaLvl(positionToSeaLvl) && isSeaLvl(newPosition)) {
        return {
          valleysEntered: valleysEntered + 1,
          positionToSeaLvl: newPosition,
        };
      }
      return { valleysEntered, positionToSeaLvl: newPosition };
    },
    { valleysEntered: 0, positionToSeaLvl: 0 }
  );
  return valleysEntered;
}

function isGoingUp(step) {
  return step === "U";
}

function isBelowSeaLvl(positionToSeaLvl) {
  return positionToSeaLvl < 0;
}

function isSeaLvl(newPosition) {
  return newPosition === 0;
}
