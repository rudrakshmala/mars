/*
 * Practical 1 (JavaScript) - Armstrong Number on a blockchain.
 *
 * A number equal to the sum of its digits, each raised to the power of the number of digits.
 * Examples: 153 = 1^3 + 5^3 + 3^3,  9474 = 9^4 + 4^4 + 7^4 + 4^4
 *
 * Run:
 *   node armstrong.js                       (uses the sample values)
 *   node armstrong.js 153 370 12      (your own values)
 *   node armstrong.js -i                    (type values one by one)
 *   node armstrong.js --only-matches        (store only successful blocks)
 *   node armstrong.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isArmstrong(n) {
  const digits = String(n);
  const power = digits.length;
  return [...digits].reduce((s, d) => s + Math.pow(Number(d), power), 0) === n;
}

function evaluate(n) {
  const ok = isArmstrong(n);
  return [ok, verdict(ok, 'Armstrong number')];
}

module.exports = { evaluate, isArmstrong };

if (require.main === module) {
  run(
    'Armstrong Number Blockchain',
    evaluate,
    [12, 153, 370, 9474, 9563],
    'number',
    1,
    ['Enter a number']
  );
}
