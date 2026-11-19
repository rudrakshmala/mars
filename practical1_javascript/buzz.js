/*
 * Practical 1 (JavaScript) - Buzz Number on a blockchain.
 *
 * A number that is divisible by 7 or ends with the digit 7.
 * Examples: 7, 14, 17, 21, 27, 28, 70
 *
 * Run:
 *   node buzz.js                       (uses the sample values)
 *   node buzz.js 7 12 28      (your own values)
 *   node buzz.js -i                    (type values one by one)
 *   node buzz.js --only-matches        (store only successful blocks)
 *   node buzz.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isBuzz(n) {
  return n % 7 === 0 || n % 10 === 7;
}

function evaluate(n) {
  const ok = isBuzz(n);
  return [ok, verdict(ok, 'Buzz number')];
}

module.exports = { evaluate, isBuzz };

if (require.main === module) {
  run(
    'Buzz Number Blockchain',
    evaluate,
    [7, 14, 17, 20, 49],
    'number',
    1,
    ['Enter a number']
  );
}
