/*
 * Practical 1 (JavaScript) - Disarium Number on a blockchain.
 *
 * A number equal to the sum of its digits raised to the power of their positions (1-based, from the left).
 * Examples: 89 = 8^1 + 9^2,  135 = 1^1 + 3^2 + 5^3,  175,  518
 *
 * Run:
 *   node disarium.js                       (uses the sample values)
 *   node disarium.js 7 12 28      (your own values)
 *   node disarium.js -i                    (type values one by one)
 *   node disarium.js --only-matches        (store only successful blocks)
 *   node disarium.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isDisarium(n) {
  return [...String(n)].reduce((s, d, i) => s + Math.pow(Number(d), i + 1), 0) === n;
}

function evaluate(n) {
  const ok = isDisarium(n);
  return [ok, verdict(ok, 'Disarium number')];
}

module.exports = { evaluate, isDisarium };

if (require.main === module) {
  run(
    'Disarium Number Blockchain',
    evaluate,
    [89, 135, 175, 518, 100],
    'number',
    1,
    ['Enter a number']
  );
}
