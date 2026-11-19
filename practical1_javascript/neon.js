/*
 * Practical 1 (JavaScript) - Neon Number on a blockchain.
 *
 * A number equal to the sum of the digits of its square.
 * Examples: 9 (9^2 = 81 -> 8+1 = 9),  0, 1
 *
 * Run:
 *   node neon.js                       (uses the sample values)
 *   node neon.js 7 12 28      (your own values)
 *   node neon.js -i                    (type values one by one)
 *   node neon.js --only-matches        (store only successful blocks)
 *   node neon.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isNeon(n) {
  return [...String(n * n)].reduce((s, d) => s + Number(d), 0) === n;
}

function evaluate(n) {
  const ok = isNeon(n);
  return [ok, verdict(ok, 'Neon number')];
}

module.exports = { evaluate, isNeon };

if (require.main === module) {
  run(
    'Neon Number Blockchain',
    evaluate,
    [0, 1, 9, 12, 45],
    'number',
    1,
    ['Enter a number']
  );
}
