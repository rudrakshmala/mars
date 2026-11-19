/*
 * Practical 1 (JavaScript) - Palindrome Number on a blockchain.
 *
 * A number that reads the same forwards and backwards.
 * Examples: 121, 1331, 12321, 7
 *
 * Run:
 *   node palindrome.js                       (uses the sample values)
 *   node palindrome.js 7 12 28      (your own values)
 *   node palindrome.js -i                    (type values one by one)
 *   node palindrome.js --only-matches        (store only successful blocks)
 *   node palindrome.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isPalindrome(n) {
  const s = String(n);
  return s === [...s].reverse().join('');
}

function evaluate(n) {
  const ok = isPalindrome(n);
  return [ok, verdict(ok, 'Palindrome number')];
}

module.exports = { evaluate, isPalindrome };

if (require.main === module) {
  run(
    'Palindrome Number Blockchain',
    evaluate,
    [121, 123, 1331, 12321, 4554],
    'number',
    1,
    ['Enter a number']
  );
}
