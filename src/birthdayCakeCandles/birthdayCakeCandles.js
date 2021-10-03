function birthdayCakeCandles(candles) {
  const sortedDescending = candles.sort((a, b) => b - a);
  return sortedDescending.filter((candle) => candle === sortedDescending[0])
    .length;
}
