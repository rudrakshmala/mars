/*
 * Practical 1 (JavaScript) - Even / Odd Number on a blockchain.
 *
 * Stores every number with the result 'Even number' or 'Odd number'.
 * Examples: Even: 2, 4, 76   Odd: 3, 7, 13
 *
 * Run:
 *   node even_odd.js                       (uses the sample values)
 *   node even_odd.js 7 12 28      (your own values)
 *   node even_odd.js -i                    (type values one by one)
 *   node even_odd.js --only-matches        (store only successful blocks)
 *   node even_odd.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isEven(n) {
  return n % 2 === 0;
}

function evaluate(n) {
  const ok = isEven(n);
  return [ok, ok ? 'Even number' : 'Odd number'];
}

module.exports = { evaluate, isEven };

if (require.main === module) {
  run(
    'Even / Odd Number Blockchain',
    evaluate,
    [76, 7, 3, 28],
    'number',
    1,
    ['Enter a number']
  );
}
