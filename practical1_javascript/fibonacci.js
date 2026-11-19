/*
 * Practical 1 (JavaScript) - Fibonacci Number on a blockchain.
 *
 * A number that appears in the Fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
 * Examples: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
 *
 * Run:
 *   node fibonacci.js                       (uses the sample values)
 *   node fibonacci.js 7 12 28      (your own values)
 *   node fibonacci.js -i                    (type values one by one)
 *   node fibonacci.js --only-matches        (store only successful blocks)
 *   node fibonacci.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isFibonacci(n) {
  let a = 0, b = 1;
  while (a < n) {
    [a, b] = [b, a + b];
  }
  return a === n;
}

function evaluate(n) {
  const ok = isFibonacci(n);
  return [ok, verdict(ok, 'Fibonacci number')];
}

module.exports = { evaluate, isFibonacci };

if (require.main === module) {
  run(
    'Fibonacci Number Blockchain',
    evaluate,
    [0, 1, 8, 13, 20, 55],
    'number',
    1,
    ['Enter a number']
  );
}
