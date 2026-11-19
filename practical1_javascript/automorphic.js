/*
 * Practical 1 (JavaScript) - Automorphic Number on a blockchain.
 *
 * A number whose square ends with the number itself.
 * Examples: 5 (25), 6 (36), 25 (625), 76 (5776), 376 (141376)
 *
 * Run:
 *   node automorphic.js                       (uses the sample values)
 *   node automorphic.js 7 12 28      (your own values)
 *   node automorphic.js -i                    (type values one by one)
 *   node automorphic.js --only-matches        (store only successful blocks)
 *   node automorphic.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isAutomorphic(n) {
  return String(n * n).endsWith(String(n));
}

function evaluate(n) {
  const ok = isAutomorphic(n);
  return [ok, verdict(ok, 'Automorphic number')];
}

module.exports = { evaluate, isAutomorphic };

if (require.main === module) {
  run(
    'Automorphic Number Blockchain',
    evaluate,
    [5, 6, 25, 76, 12, 376],
    'number',
    1,
    ['Enter a number']
  );
}
