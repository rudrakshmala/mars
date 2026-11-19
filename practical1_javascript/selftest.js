// Checks every number type against known true / false examples.
const TESTS = {"add": [[[23, 76], true], [[0, 0], true]], "prime": [[[2], true], [[3], true], [[7], true], [[13], true], [[97], true], [[0], false], [[1], false], [[4], false], [[9], false], [[76], false]], "happy": [[[1], true], [[7], true], [[10], true], [[13], true], [[19], true], [[23], true], [[28], true], [[100], true], [[2], false], [[4], false], [[16], false], [[20], false], [[37], false], [[58], false]], "armstrong": [[[0], true], [[1], true], [[5], true], [[153], true], [[370], true], [[371], true], [[407], true], [[1634], true], [[9474], true], [[10], false], [[12], false], [[100], false], [[9563], false]], "perfect": [[[6], true], [[28], true], [[496], true], [[8128], true], [[1], false], [[12], false], [[27], false], [[100], false]], "krishnamurthy": [[[1], true], [[2], true], [[145], true], [[40585], true], [[0], false], [[3], false], [[12], false], [[144], false], [[146], false]], "palindrome": [[[0], true], [[7], true], [[11], true], [[121], true], [[12321], true], [[10], false], [[123], false], [[1231], false]], "automorphic": [[[0], true], [[1], true], [[5], true], [[6], true], [[25], true], [[76], true], [[376], true], [[625], true], [[2], false], [[3], false], [[7], false], [[12], false], [[75], false]], "neon": [[[0], true], [[1], true], [[9], true], [[2], false], [[3], false], [[10], false], [[12], false]], "harshad": [[[1], true], [[12], true], [[18], true], [[21], true], [[100], true], [[153], true], [[11], false], [[13], false], [[19], false], [[23], false]], "disarium": [[[1], true], [[2], true], [[89], true], [[135], true], [[175], true], [[518], true], [[10], false], [[11], false], [[100], false], [[176], false]], "magic": [[[1], true], [[10], true], [[19], true], [[28], true], [[1729], true], [[55], true], [[2], false], [[56], false], [[99], false], [[123], false]], "spy": [[[0], true], [[5], true], [[22], true], [[123], true], [[1124], true], [[14], false], [[100], false], [[124], false]], "buzz": [[[7], true], [[14], true], [[17], true], [[27], true], [[70], true], [[8], false], [[20], false], [[23], false], [[99], false]], "fibonacci": [[[0], true], [[1], true], [[2], true], [[3], true], [[5], true], [[8], true], [[13], true], [[21], true], [[89], true], [[4], false], [[6], false], [[7], false], [[20], false], [[100], false]], "perfect_square": [[[0], true], [[1], true], [[4], true], [[9], true], [[16], true], [[100], true], [[144], true], [[2], false], [[3], false], [[8], false], [[99], false], [[101], false]], "even_odd": [[[2], true], [[76], true], [[7], false], [[0], true]], "anagram": [[["listen", "silent"], true], [["The eyes", "They see"], true], [["hello", "world"], false]]};

let failed = 0;
for (const [name, cases] of Object.entries(TESTS)) {
  const mod = require('./' + name);
  for (const [inputs, expected] of cases) {
    const [ok, result] = mod.evaluate(...inputs);
    if (ok !== expected) {
      failed++;
      console.log(`FAIL  ${name}(${inputs.join(', ')}): expected ${expected}, got ${ok} (${result})`);
    }
  }
  console.log(`ok    ${name} (${cases.length} cases)`);
}
console.log(failed ? `\n${failed} test(s) failed.` : '\nAll tests passed.');
process.exit(failed ? 1 : 0);
