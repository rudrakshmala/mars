// Runs every number-type blockchain once with its sample values.
const { spawnSync } = require('child_process');
const path = require('path');

const SCRIPTS = ["add", "prime", "happy", "armstrong", "perfect", "krishnamurthy", "palindrome", "automorphic", "neon", "harshad", "disarium", "magic", "spy", "buzz", "fibonacci", "perfect_square", "even_odd", "anagram"];

for (const name of SCRIPTS) {
  console.log('\n' + '#'.repeat(95));
  console.log('#  ' + name + '.js');
  console.log('#'.repeat(95));
  const r = spawnSync(process.execPath, [path.join(__dirname, name + '.js')], { stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status);
}
