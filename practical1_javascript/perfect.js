/*
 * Practical 1 (JavaScript) - Perfect Number on a blockchain.
 *
 * A number equal to the sum of its proper divisors (all divisors except the number itself).
 * Examples: 6 = 1+2+3,  28 = 1+2+4+7+14,  496,  8128
 *
 * Run:
 *   node perfect.js                       (uses the sample values)
 *   node perfect.js 7 12 28      (your own values)
 *   node perfect.js -i                    (type values one by one)
 *   node perfect.js --only-matches        (store only successful blocks)
 *   node perfect.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isPerfect(n) {
  if (n < 2) return false;
  let total = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      total += i;
      if (i !== n / i) total += n / i;
    }
  }
  return total === n;
}

function evaluate(n) {
  const ok = isPerfect(n);
  return [ok, verdict(ok, 'Perfect number')];
}

module.exports = { evaluate, isPerfect };

if (require.main === module) {
  run(
    'Perfect Number Blockchain',
    evaluate,
    [6, 28, 12, 496, 100],
    'number',
    1,
    ['Enter a number']
  );
}
