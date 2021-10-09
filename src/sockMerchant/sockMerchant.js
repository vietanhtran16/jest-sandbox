// https://www.hackerrank.com/challenges/sock-merchant/problem
export function sockMerchant(n, socks) {
  const sockCount = socks.reduce(
    (count, color) =>
      count[color]
        ? count
        : {
            ...count,
            [color]: countSockByColor(socks, color),
          },
    {}
  );
  return Object.values(sockCount).reduce(
    (total, sockNumberCount) => total + Math.floor(sockNumberCount / 2),
    0
  );
}

function countSockByColor(socks, color) {
  return socks.filter((sock) => sock === color).length;
}
