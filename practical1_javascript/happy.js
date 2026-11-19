/*
 * Practical 1 (JavaScript) - Happy Number on a blockchain.
 *
 * Repeatedly replace the number by the sum of the squares of its digits. If you reach 1 it is happy; if it loops forever it is not.
 * Examples: 1, 7, 10, 13, 19, 23, 28, 31 ...  (e.g. 13 -> 1+9=10 -> 1+0=1)
 *
 * Run:
 *   node happy.js                       (uses the sample values)
 *   node happy.js 7 12 28      (your own values)
 *   node happy.js -i                    (type values one by one)
 *   node happy.js --only-matches        (store only successful blocks)
 *   node happy.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isHappy(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = [...String(n)].reduce((s, d) => s + d * d, 0);
  }
  return n === 1;
}

function evaluate(n) {
  const ok = isHappy(n);
  return [ok, verdict(ok, 'Happy number')];
}

module.exports = { evaluate, isHappy };

if (require.main === module) {
  run(
    'Happy Number Blockchain',
    evaluate,
    [28, 76, 17, 13, 21],
    'number',
    1,
    ['Enter a number']
  );
}
