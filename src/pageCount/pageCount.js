export function pageCount(numberOfPages, desiredPage) {
  const pagesToTurntFromLeft = Math.floor(desiredPage / 2);
  const middleOfBook = numberOfPages / 2;
  if (desiredPage <= middleOfBook) {
    return pagesToTurntFromLeft;
  }
  const pagesToTurntToTheEnd = Math.floor(numberOfPages / 2);
  return pagesToTurntToTheEnd - pagesToTurntFromLeft;
}
