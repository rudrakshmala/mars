/*
 * Practical 1 (JavaScript) - Spy Number on a blockchain.
 *
 * A number whose sum of digits equals the product of its digits.
 * Examples: 22 (2+2 = 2*2),  123 (1+2+3 = 1*2*3),  1124,  1412
 *
 * Run:
 *   node spy.js                       (uses the sample values)
 *   node spy.js 7 12 28      (your own values)
 *   node spy.js -i                    (type values one by one)
 *   node spy.js --only-matches        (store only successful blocks)
 *   node spy.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isSpy(n) {
  const digits = [...String(n)].map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  const product = digits.reduce((a, b) => a * b, 1);
  return sum === product;
}

function evaluate(n) {
  const ok = isSpy(n);
  return [ok, verdict(ok, 'Spy number')];
}

module.exports = { evaluate, isSpy };

if (require.main === module) {
  run(
    'Spy Number Blockchain',
    evaluate,
    [22, 123, 1124, 14, 100],
    'number',
    1,
    ['Enter a number']
  );
}
