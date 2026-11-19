/*
 * Practical 1 (JavaScript) - Krishnamurthy (Strong) Number on a blockchain.
 *
 * A number equal to the sum of the factorials of its digits. Also called a Strong number.
 * Examples: 145 = 1! + 4! + 5! = 1 + 24 + 120,  also 1, 2, 40585
 *
 * Run:
 *   node krishnamurthy.js                       (uses the sample values)
 *   node krishnamurthy.js 7 12 28      (your own values)
 *   node krishnamurthy.js -i                    (type values one by one)
 *   node krishnamurthy.js --only-matches        (store only successful blocks)
 *   node krishnamurthy.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function factorial(k) {
  let f = 1;
  for (let i = 2; i <= k; i++) f *= i;
  return f;
}

function isKrishnamurthy(n) {
  if (n <= 0) return false;
  return [...String(n)].reduce((s, d) => s + factorial(Number(d)), 0) === n;
}

function evaluate(n) {
  const ok = isKrishnamurthy(n);
  return [ok, verdict(ok, 'Krishnamurthy number')];
}

module.exports = { evaluate, isKrishnamurthy };

if (require.main === module) {
  run(
    'Krishnamurthy (Strong) Number Blockchain',
    evaluate,
    [1, 2, 145, 40585, 123],
    'number',
    1,
    ['Enter a number']
  );
}
