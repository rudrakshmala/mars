/*
 * Shared blockchain engine for Practical 1 (JavaScript / Node.js).
 *
 * Every number type (armstrong.js, prime.js, ...) requires this file, so it
 * must stay in the same folder.  You normally never need to edit it, except
 * AUTHOR below (or set the AUTHOR_NAME environment variable).
 */
const crypto = require('crypto');
const readline = require('readline');

const AUTHOR = process.env.AUTHOR_NAME || 'Saniya Mahadik';

function verdict(ok, label) {
  return ok ? label : 'Not ' + label;
}

class Block {
  constructor(index, inputs, result, previousHash) {
    this.index = index;
    this.timestamp = new Date().toISOString();
    this.inputs = inputs;
    this.result = result;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash('sha256')
      .update(this.index + this.timestamp + this.inputs + this.result + this.previousHash)
      .digest('hex');
  }
}

class Blockchain {
  constructor(title, evaluate) {
    this.title = title;
    this.evaluate = evaluate; // evaluate(...inputs) -> [matched, resultText]
    this.chain = [new Block(0, 'Genesis', 'Genesis Block', '0')];
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(inputs, onlyMatches = false) {
    const [matched, result] = this.evaluate(...inputs);
    const shown = inputs.join(', ');
    if (onlyMatches && !matched) {
      console.log(`Skipped (not stored): ${shown} -> ${result}`);
      return false;
    }
    this.chain.push(new Block(this.chain.length, shown, result, this.getLatestBlock().hash));
    return true;
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const cur = this.chain[i];
      const prev = this.chain[i - 1];
      if (cur.hash !== cur.calculateHash()) return false;
      if (cur.previousHash !== prev.hash) return false;
    }
    return true;
  }
}

function parseValue(raw, kind) {
  if (kind === 'string') return raw;
  if (!/^\d+$/.test(raw.trim())) {
    console.error(`Error: '${raw}' is not a non-negative whole number.`);
    process.exit(1);
  }
  return Number(raw);
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function run(title, evaluate, defaults, kind = 'number', arity = 1, prompts = null) {
  const argv = process.argv.slice(2);
  const flags = argv.filter((a) => a.startsWith('--') || a === '-i');
  const values = argv.filter((a) => !(a.startsWith('--') || a === '-i'));
  const interactive = flags.includes('-i') || flags.includes('--interactive');
  const onlyMatches = flags.includes('--only-matches');
  const tamper = flags.includes('--tamper');

  prompts = prompts || Array.from({ length: arity }, (_, i) => `Enter value ${i + 1}`);
  let groups = [];

  if (interactive) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const count = Number(await ask(rl, 'How many blocks do you want to add? '));
    for (let c = 0; c < count; c++) {
      const g = [];
      for (const p of prompts) g.push(parseValue(await ask(rl, p + ': '), kind));
      groups.push(g);
    }
    rl.close();
  } else if (values.length) {
    if (values.length % arity) {
      console.error(`Error: give values in groups of ${arity}.`);
      process.exit(1);
    }
    const vals = values.map((v) => parseValue(v, kind));
    for (let i = 0; i < vals.length; i += arity) groups.push(vals.slice(i, i + arity));
  } else {
    groups = defaults.map((d) => (Array.isArray(d) ? d : [d]));
  }

  console.log(`\nDeveloped by ${AUTHOR}`);
  console.log(`=== ${title} ===\n`);
  const bc = new Blockchain(title, evaluate);
  for (const g of groups) bc.addBlock(g, onlyMatches);

  console.log(JSON.stringify(bc.chain, null, 2));
  console.log('\nChain valid:', bc.isValid());

  if (tamper) {
    if (bc.chain.length > 1) {
      bc.chain[1].result = 'TAMPERED DATA';
      console.log('\n[demo] Block 1 was modified without recomputing its hash...');
      console.log('Chain valid:', bc.isValid());
    } else {
      console.log('\n[demo] Nothing to tamper with - no blocks were stored.');
    }
  }
}

module.exports = { Block, Blockchain, verdict, run };
