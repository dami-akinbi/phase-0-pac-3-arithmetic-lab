function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}

function makeInt(n) {
  if (typeof parseInt(n, 10) === "number") return parseInt(n, 10);
  else return NaN;
}

function preserveDecimal(n) {
  if (typeof parseInt(n, 10) === "number") return Number(n);
  else return NaN;
}
