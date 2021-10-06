export function breakingRecords(scores) {
  const initialState = {
    result: [0, 0],
    highestScore: scores[0],
    lowestScore: scores[0],
  };
  const { result } = scores.reduce(
    ({ result, highestScore, lowestScore }, currentScore) => {
      if (currentScore > highestScore) {
        return {
          result: [result[0] + 1, result[1]],
          highestScore: currentScore,
          lowestScore,
        };
      } else if (currentScore < lowestScore) {
        return {
          result: [result[0], result[1] + 1],
          highestScore,
          lowestScore: currentScore,
        };
      }
      return {
        result,
        highestScore,
        lowestScore,
      };
    },
    initialState
  );
  return result;
}
