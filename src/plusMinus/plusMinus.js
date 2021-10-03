function plusMinus(arr) {
  const totalCount = arr.length;
  const positivePropotion =
    arr.filter((number) => number > 0).length / totalCount;
  const zeroCount = arr.filter((number) => number === 0).length / totalCount;
  const negativeCount = arr.filter((number) => number < 0).length / totalCount;
  console.log(positivePropotion.toFixed(6));
  console.log(negativeCount.toFixed(6));
  console.log(zeroCount.toFixed(6));
}
