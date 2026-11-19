/*
 * Practical 1 (JavaScript) - Addition of Two Numbers on a blockchain.
 *
 * Adds two numbers and stores both inputs and the sum inside each block.
 * Examples: 23 + 76 = 99
 *
 * Run:
 *   node add.js                       (uses the sample values)
 *   node add.js 23 76 5 5      (your own values)
 *   node add.js -i                    (type values one by one)
 *   node add.js --only-matches        (store only successful blocks)
 *   node add.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function evaluate(a, b) {
  const total = a + b;
  return [true, `Sum = ${total}`];
}

module.exports = { evaluate };

if (require.main === module) {
  run(
    'Addition of Two Numbers Blockchain',
    evaluate,
    [[23, 76], [32, 78], [3, 8]],
    'number',
    2,
    ['First number', 'Second number']
  );
}
