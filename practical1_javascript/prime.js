/*
 * Practical 1 (JavaScript) - Prime Number on a blockchain.
 *
 * A number greater than 1 that has no divisors other than 1 and itself.
 * Examples: 2, 3, 5, 7, 11, 13 ...
 *
 * Run:
 *   node prime.js                       (uses the sample values)
 *   node prime.js 7 12 28      (your own values)
 *   node prime.js -i                    (type values one by one)
 *   node prime.js --only-matches        (store only successful blocks)
 *   node prime.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function evaluate(n) {
  const ok = isPrime(n);
  return [ok, verdict(ok, 'Prime number')];
}

module.exports = { evaluate, isPrime };

if (require.main === module) {
  run(
    'Prime Number Blockchain',
    evaluate,
    [76, 7, 3, 1, 97],
    'number',
    1,
    ['Enter a number']
  );
}
