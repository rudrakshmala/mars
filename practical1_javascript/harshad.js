/*
 * Practical 1 (JavaScript) - Harshad (Niven) Number on a blockchain.
 *
 * A number that is divisible by the sum of its own digits.
 * Examples: 18 (1+8 = 9, 18/9 = 2),  21, 12, 100, 153
 *
 * Run:
 *   node harshad.js                       (uses the sample values)
 *   node harshad.js 7 12 28      (your own values)
 *   node harshad.js -i                    (type values one by one)
 *   node harshad.js --only-matches        (store only successful blocks)
 *   node harshad.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isHarshad(n) {
  if (n <= 0) return false;
  const digitSum = [...String(n)].reduce((s, d) => s + Number(d), 0);
  return n % digitSum === 0;
}

function evaluate(n) {
  const ok = isHarshad(n);
  return [ok, verdict(ok, 'Harshad number')];
}

module.exports = { evaluate, isHarshad };

if (require.main === module) {
  run(
    'Harshad (Niven) Number Blockchain',
    evaluate,
    [18, 21, 19, 153, 100],
    'number',
    1,
    ['Enter a number']
  );
}
