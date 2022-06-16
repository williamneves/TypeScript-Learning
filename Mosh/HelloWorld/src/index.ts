function calculateTax(income: number, taxYear=2022): number {
  let x;
  if (taxYear < 2022) {
    x = income * 0.8;
  } else {
    x = income * 0.9;
  }
  return x;
}