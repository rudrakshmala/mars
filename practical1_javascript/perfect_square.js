/*
 * Practical 1 (JavaScript) - Perfect Square Number on a blockchain.
 *
 * A number that is the square of a whole number.
 * Examples: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
 *
 * Run:
 *   node perfect_square.js                       (uses the sample values)
 *   node perfect_square.js 7 12 28      (your own values)
 *   node perfect_square.js -i                    (type values one by one)
 *   node perfect_square.js --only-matches        (store only successful blocks)
 *   node perfect_square.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isPerfectSquare(n) {
  const r = Math.floor(Math.sqrt(n));
  return r * r === n;
}

function evaluate(n) {
  const ok = isPerfectSquare(n);
  return [ok, verdict(ok, 'Perfect square')];
}

module.exports = { evaluate, isPerfectSquare };

if (require.main === module) {
  run(
    'Perfect Square Number Blockchain',
    evaluate,
    [16, 25, 26, 100, 99],
    'number',
    1,
    ['Enter a number']
  );
}
