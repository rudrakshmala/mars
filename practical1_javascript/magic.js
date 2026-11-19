/*
 * Practical 1 (JavaScript) - Magic Number on a blockchain.
 *
 * Keep adding the digits until a single digit is left. If that digit is 1, it is a magic number.
 * Examples: 19 (1+9 = 10 -> 1),  1729,  28 (2+8 = 10 -> 1),  1, 10
 *
 * Run:
 *   node magic.js                       (uses the sample values)
 *   node magic.js 7 12 28      (your own values)
 *   node magic.js -i                    (type values one by one)
 *   node magic.js --only-matches        (store only successful blocks)
 *   node magic.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isMagic(n) {
  if (n <= 0) return false;
  while (n > 9) {
    n = [...String(n)].reduce((s, d) => s + Number(d), 0);
  }
  return n === 1;
}

function evaluate(n) {
  const ok = isMagic(n);
  return [ok, verdict(ok, 'Magic number')];
}

module.exports = { evaluate, isMagic };

if (require.main === module) {
  run(
    'Magic Number Blockchain',
    evaluate,
    [19, 28, 1729, 56, 10],
    'number',
    1,
    ['Enter a number']
  );
}
