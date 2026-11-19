/*
 * Practical 1 (JavaScript) - Anagram Check (two statements) on a blockchain.
 *
 * Checks whether two words/sentences are anagrams (same letters, ignoring spaces and case).
 * Examples: "listen" & "silent",  "The eyes" & "They see"
 *
 * Run:
 *   node anagram.js                       (uses the sample values)
 *   node anagram.js listen silent hello world      (your own values)
 *   node anagram.js -i                    (type values one by one)
 *   node anagram.js --only-matches        (store only successful blocks)
 *   node anagram.js --tamper              (show how tampering breaks the chain)
 */
const { verdict, run } = require('./core');

function isAnagram(a, b) {
  const norm = (s) => [...s.replace(/ /g, '').toLowerCase()].sort().join('');
  return norm(a) === norm(b);
}

function evaluate(a, b) {
  const ok = isAnagram(a, b);
  return [ok, verdict(ok, 'Anagram')];
}

module.exports = { evaluate, isAnagram };

if (require.main === module) {
  run(
    'Anagram Check (two statements) Blockchain',
    evaluate,
    [["listen", "silent"], ["hello", "world"], ["The eyes", "They see"]],
    'string',
    2,
    ['First statement', 'Second statement']
  );
}
