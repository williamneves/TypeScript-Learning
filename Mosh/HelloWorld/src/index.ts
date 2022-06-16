function calculateTax(income: number): number {
  let x;
  if (income > 100_000) {
    x = income * 0.8;
  } else {
    x = income * 0.9;
  }
  return x;
}