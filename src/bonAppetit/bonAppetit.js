// https://www.hackerrank.com/challenges/bon-appetit/problem
export function bonAppetit(bill, itemAnnaDoesNotEat, amountAnnaPaid) {
  const amountAnnaShouldPay =
    bill
      .filter((_, index) => index !== itemAnnaDoesNotEat)
      .reduce((total, item) => total + item, 0) / 2;
  if (amountAnnaPaid > amountAnnaShouldPay) {
    console.log(amountAnnaPaid - amountAnnaShouldPay);
  } else {
    console.log("Bon Appetit");
  }
}
