# Blockchain Practicals - Number Programs

Every "number type" from **Practical 1 (JavaScript)** and **Practical 2 (Python)** lives in its own file, so you
can run any one of them individually in the exam. Each program builds a small blockchain
(genesis block + one block per number), stores the check result in each block, links the blocks with
SHA-256 hashes, and finally verifies that the chain is valid.

* **Practical 1** - Node.js (JavaScript) - folder `practical1_javascript/`
* **Practical 2** - Python 3 - folder `practical2_python/`

Both folders contain the same 18 programs with the same options, so use whichever language your practical needs.

---

## 1. Project structure

```
blockchain-number-practicals/
├── README.md
├── .gitignore
├── practical1_javascript/        <- Practical 1 (Node.js)
│   ├── core.js                   <- shared Block + Blockchain classes (keep in the same folder)
│   ├── add.js  prime.js  happy.js  armstrong.js  perfect.js  krishnamurthy.js ...
│   ├── run_all.js                <- runs every program once
│   ├── selftest.js               <- checks all programs against known answers
│   └── package.json              <- gives the shortcut "npm run <name>" commands
└── practical2_python/            <- Practical 2 (Python)
    ├── core.py                   <- shared Block + Blockchain classes (keep in the same folder)
    ├── add.py  prime.py  happy.py  armstrong.py  perfect.py  krishnamurthy.py ...
    ├── run_all.py
    └── selftest.py
```

**Important:** every program imports `core.py` / `core.js`, so never move a number file out of its folder alone.

## 2. One-time setup

No libraries are needed. Both languages use only built-in modules (`hashlib`, `crypto`).

1. Install **Python 3.8+** (check with `python --version`; on Linux/macOS you may need `python3`).
2. Install **Node.js 14+** from https://nodejs.org (check with `node --version`).
3. Download / clone this repository and open a terminal in the `blockchain-number-practicals` folder.
4. **Set your name** (printed as "Developed by ..." in every output). Pick one:
   * edit the `AUTHOR` line at the top of `practical2_python/core.py` and `practical1_javascript/core.js`, or
   * set an environment variable before running:
     * Windows (PowerShell): `$env:AUTHOR_NAME="Your Name"`
     * Windows (cmd): `set AUTHOR_NAME=Your Name`
     * Linux / macOS: `export AUTHOR_NAME="Your Name"`

## 3. Quick start

```bash
# Python (Practical 2)
cd practical2_python
python armstrong.py

# JavaScript (Practical 1)
cd practical1_javascript
node armstrong.js
```

You will see the genesis block, one block per number (with timestamp, input, result, previous hash,
current hash) and finally `Chain valid: True`.

Sample output (Python, shortened):

```
Developed by Saniya Mahadik
=== Armstrong Number Blockchain ===

Block            : 0
Timestamp        : 2026-11-19 01:21:38.342425
Input(s)         : Genesis
Result           : Genesis Block
Previous hash    : 0
Current hash     : 6e903e8022aacc9d0efd942d5c5e628ba774f247f1158d464871c0d90f0f4808
-----------------------------------------------------------------------------------------------
Block            : 1
Timestamp        : 2026-11-19 01:21:38.342516
Input(s)         : 12
Result           : Not Armstrong number
Previous hash    : 6e903e8022aacc9d0efd942d5c5e628ba774f247f1158d464871c0d90f0f4808
Current hash     : 2f7bdf680e97648ee79f2871eb819549e51ccc9776e30a9c590c4535dab87cb8
-----------------------------------------------------------------------------------------------
  ...
Chain valid: True
```

## 4. Options available for every program

| Option | What it does | Example |
|---|---|---|
| *(none)* | Uses built-in sample numbers | `python prime.py` |
| `v1 v2 v3 ...` | Checks your own numbers (one block each) | `python prime.py 7 12 97` |
| `-i` / `--interactive` | Asks how many blocks, then asks for each value | `python prime.py -i` |
| `--only-matches` | Stores a block **only** if the number passes (e.g. "store it in the blockchain or else not") | `python happy.py 28 76 13 --only-matches` |
| `--tamper` | Edits block 1 after creation to prove that validation fails | `python armstrong.py --tamper` |

Programs that take **two values per block** (`add`, `anagram`) need values in pairs:
`python add.py 23 76 5 5` -> 2 blocks. For sentences use quotes: `python anagram.py "The eyes" "They see"`.

Only non-negative whole numbers are accepted for the number programs.

## 5. Programs and detailed run steps

| # | Program | File name | Examples |
|---|---|---|---|
| 1 | Addition of Two Numbers | `add` | 23 + 76 = 99 |
| 2 | Prime Number | `prime` | 2, 3, 5, 7, 11, 13 ... |
| 3 | Happy Number | `happy` | 1, 7, 10, 13, 19, 23, 28, 31 ...  (e.g. 13 -> 1+9=10 -> 1+0=1) |
| 4 | Armstrong Number | `armstrong` | 153 = 1^3 + 5^3 + 3^3,  9474 = 9^4 + 4^4 + 7^4 + 4^4 |
| 5 | Perfect Number | `perfect` | 6 = 1+2+3,  28 = 1+2+4+7+14,  496,  8128 |
| 6 | Krishnamurthy (Strong) Number | `krishnamurthy` | 145 = 1! + 4! + 5! = 1 + 24 + 120,  also 1, 2, 40585 |
| 7 | Palindrome Number | `palindrome` | 121, 1331, 12321, 7 |
| 8 | Automorphic Number | `automorphic` | 5 (25), 6 (36), 25 (625), 76 (5776), 376 (141376) |
| 9 | Neon Number | `neon` | 9 (9^2 = 81 -> 8+1 = 9),  0, 1 |
| 10 | Harshad (Niven) Number | `harshad` | 18 (1+8 = 9, 18/9 = 2),  21, 12, 100, 153 |
| 11 | Disarium Number | `disarium` | 89 = 8^1 + 9^2,  135 = 1^1 + 3^2 + 5^3,  175,  518 |
| 12 | Magic Number | `magic` | 19 (1+9 = 10 -> 1),  1729,  28 (2+8 = 10 -> 1),  1, 10 |
| 13 | Spy Number | `spy` | 22 (2+2 = 2*2),  123 (1+2+3 = 1*2*3),  1124,  1412 |
| 14 | Buzz Number | `buzz` | 7, 14, 17, 21, 27, 28, 70 |
| 15 | Fibonacci Number | `fibonacci` | 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 |
| 16 | Perfect Square Number | `perfect_square` | 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 |
| 17 | Even / Odd Number | `even_odd` | Even: 2, 4, 76   Odd: 3, 7, 13 |
| 18 | Anagram Check (two statements) | `anagram` | "listen" & "silent",  "The eyes" & "They see" |

### 1. Addition of Two Numbers

**Rule:** Adds two numbers and stores both inputs and the sum inside each block.
**Examples:** 23 + 76 = 99

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python add.py` | `node add.js` |
| Run with your own values | `python add.py 23 76 5 5` | `node add.js 23 76 5 5` |
| Type values one by one | `python add.py -i` | `node add.js -i` |
| Store only successful numbers | `python add.py --only-matches` | `node add.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python add.py --tamper` | `node add.js --tamper` |
| Shortcut with npm | - | `npm run add` &nbsp;or&nbsp; `npm run add -- 23 76 5 5` |

Source files: `practical2_python/add.py` and `practical1_javascript/add.js`

### 2. Prime Number

**Rule:** A number greater than 1 that has no divisors other than 1 and itself.
**Examples:** 2, 3, 5, 7, 11, 13 ...

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python prime.py` | `node prime.js` |
| Run with your own values | `python prime.py 7 12 28` | `node prime.js 7 12 28` |
| Type values one by one | `python prime.py -i` | `node prime.js -i` |
| Store only successful numbers | `python prime.py --only-matches` | `node prime.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python prime.py --tamper` | `node prime.js --tamper` |
| Shortcut with npm | - | `npm run prime` &nbsp;or&nbsp; `npm run prime -- 7 12 28` |

Source files: `practical2_python/prime.py` and `practical1_javascript/prime.js`

### 3. Happy Number

**Rule:** Repeatedly replace the number by the sum of the squares of its digits. If you reach 1 it is happy; if it loops forever it is not.
**Examples:** 1, 7, 10, 13, 19, 23, 28, 31 ...  (e.g. 13 -> 1+9=10 -> 1+0=1)

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python happy.py` | `node happy.js` |
| Run with your own values | `python happy.py 7 12 28` | `node happy.js 7 12 28` |
| Type values one by one | `python happy.py -i` | `node happy.js -i` |
| Store only successful numbers | `python happy.py --only-matches` | `node happy.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python happy.py --tamper` | `node happy.js --tamper` |
| Shortcut with npm | - | `npm run happy` &nbsp;or&nbsp; `npm run happy -- 7 12 28` |

Source files: `practical2_python/happy.py` and `practical1_javascript/happy.js`

### 4. Armstrong Number

**Rule:** A number equal to the sum of its digits, each raised to the power of the number of digits.
**Examples:** 153 = 1^3 + 5^3 + 3^3,  9474 = 9^4 + 4^4 + 7^4 + 4^4

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python armstrong.py` | `node armstrong.js` |
| Run with your own values | `python armstrong.py 153 370 12` | `node armstrong.js 153 370 12` |
| Type values one by one | `python armstrong.py -i` | `node armstrong.js -i` |
| Store only successful numbers | `python armstrong.py --only-matches` | `node armstrong.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python armstrong.py --tamper` | `node armstrong.js --tamper` |
| Shortcut with npm | - | `npm run armstrong` &nbsp;or&nbsp; `npm run armstrong -- 153 370 12` |

Source files: `practical2_python/armstrong.py` and `practical1_javascript/armstrong.js`

### 5. Perfect Number

**Rule:** A number equal to the sum of its proper divisors (all divisors except the number itself).
**Examples:** 6 = 1+2+3,  28 = 1+2+4+7+14,  496,  8128

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python perfect.py` | `node perfect.js` |
| Run with your own values | `python perfect.py 7 12 28` | `node perfect.js 7 12 28` |
| Type values one by one | `python perfect.py -i` | `node perfect.js -i` |
| Store only successful numbers | `python perfect.py --only-matches` | `node perfect.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python perfect.py --tamper` | `node perfect.js --tamper` |
| Shortcut with npm | - | `npm run perfect` &nbsp;or&nbsp; `npm run perfect -- 7 12 28` |

Source files: `practical2_python/perfect.py` and `practical1_javascript/perfect.js`

### 6. Krishnamurthy (Strong) Number

**Rule:** A number equal to the sum of the factorials of its digits. Also called a Strong number.
**Examples:** 145 = 1! + 4! + 5! = 1 + 24 + 120,  also 1, 2, 40585

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python krishnamurthy.py` | `node krishnamurthy.js` |
| Run with your own values | `python krishnamurthy.py 7 12 28` | `node krishnamurthy.js 7 12 28` |
| Type values one by one | `python krishnamurthy.py -i` | `node krishnamurthy.js -i` |
| Store only successful numbers | `python krishnamurthy.py --only-matches` | `node krishnamurthy.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python krishnamurthy.py --tamper` | `node krishnamurthy.js --tamper` |
| Shortcut with npm | - | `npm run krishnamurthy` &nbsp;or&nbsp; `npm run krishnamurthy -- 7 12 28` |

Source files: `practical2_python/krishnamurthy.py` and `practical1_javascript/krishnamurthy.js`

### 7. Palindrome Number

**Rule:** A number that reads the same forwards and backwards.
**Examples:** 121, 1331, 12321, 7

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python palindrome.py` | `node palindrome.js` |
| Run with your own values | `python palindrome.py 7 12 28` | `node palindrome.js 7 12 28` |
| Type values one by one | `python palindrome.py -i` | `node palindrome.js -i` |
| Store only successful numbers | `python palindrome.py --only-matches` | `node palindrome.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python palindrome.py --tamper` | `node palindrome.js --tamper` |
| Shortcut with npm | - | `npm run palindrome` &nbsp;or&nbsp; `npm run palindrome -- 7 12 28` |

Source files: `practical2_python/palindrome.py` and `practical1_javascript/palindrome.js`

### 8. Automorphic Number

**Rule:** A number whose square ends with the number itself.
**Examples:** 5 (25), 6 (36), 25 (625), 76 (5776), 376 (141376)

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python automorphic.py` | `node automorphic.js` |
| Run with your own values | `python automorphic.py 7 12 28` | `node automorphic.js 7 12 28` |
| Type values one by one | `python automorphic.py -i` | `node automorphic.js -i` |
| Store only successful numbers | `python automorphic.py --only-matches` | `node automorphic.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python automorphic.py --tamper` | `node automorphic.js --tamper` |
| Shortcut with npm | - | `npm run automorphic` &nbsp;or&nbsp; `npm run automorphic -- 7 12 28` |

Source files: `practical2_python/automorphic.py` and `practical1_javascript/automorphic.js`

### 9. Neon Number

**Rule:** A number equal to the sum of the digits of its square.
**Examples:** 9 (9^2 = 81 -> 8+1 = 9),  0, 1

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python neon.py` | `node neon.js` |
| Run with your own values | `python neon.py 7 12 28` | `node neon.js 7 12 28` |
| Type values one by one | `python neon.py -i` | `node neon.js -i` |
| Store only successful numbers | `python neon.py --only-matches` | `node neon.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python neon.py --tamper` | `node neon.js --tamper` |
| Shortcut with npm | - | `npm run neon` &nbsp;or&nbsp; `npm run neon -- 7 12 28` |

Source files: `practical2_python/neon.py` and `practical1_javascript/neon.js`

### 10. Harshad (Niven) Number

**Rule:** A number that is divisible by the sum of its own digits.
**Examples:** 18 (1+8 = 9, 18/9 = 2),  21, 12, 100, 153

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python harshad.py` | `node harshad.js` |
| Run with your own values | `python harshad.py 7 12 28` | `node harshad.js 7 12 28` |
| Type values one by one | `python harshad.py -i` | `node harshad.js -i` |
| Store only successful numbers | `python harshad.py --only-matches` | `node harshad.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python harshad.py --tamper` | `node harshad.js --tamper` |
| Shortcut with npm | - | `npm run harshad` &nbsp;or&nbsp; `npm run harshad -- 7 12 28` |

Source files: `practical2_python/harshad.py` and `practical1_javascript/harshad.js`

### 11. Disarium Number

**Rule:** A number equal to the sum of its digits raised to the power of their positions (1-based, from the left).
**Examples:** 89 = 8^1 + 9^2,  135 = 1^1 + 3^2 + 5^3,  175,  518

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python disarium.py` | `node disarium.js` |
| Run with your own values | `python disarium.py 7 12 28` | `node disarium.js 7 12 28` |
| Type values one by one | `python disarium.py -i` | `node disarium.js -i` |
| Store only successful numbers | `python disarium.py --only-matches` | `node disarium.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python disarium.py --tamper` | `node disarium.js --tamper` |
| Shortcut with npm | - | `npm run disarium` &nbsp;or&nbsp; `npm run disarium -- 7 12 28` |

Source files: `practical2_python/disarium.py` and `practical1_javascript/disarium.js`

### 12. Magic Number

**Rule:** Keep adding the digits until a single digit is left. If that digit is 1, it is a magic number.
**Examples:** 19 (1+9 = 10 -> 1),  1729,  28 (2+8 = 10 -> 1),  1, 10

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python magic.py` | `node magic.js` |
| Run with your own values | `python magic.py 7 12 28` | `node magic.js 7 12 28` |
| Type values one by one | `python magic.py -i` | `node magic.js -i` |
| Store only successful numbers | `python magic.py --only-matches` | `node magic.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python magic.py --tamper` | `node magic.js --tamper` |
| Shortcut with npm | - | `npm run magic` &nbsp;or&nbsp; `npm run magic -- 7 12 28` |

Source files: `practical2_python/magic.py` and `practical1_javascript/magic.js`

### 13. Spy Number

**Rule:** A number whose sum of digits equals the product of its digits.
**Examples:** 22 (2+2 = 2*2),  123 (1+2+3 = 1*2*3),  1124,  1412

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python spy.py` | `node spy.js` |
| Run with your own values | `python spy.py 7 12 28` | `node spy.js 7 12 28` |
| Type values one by one | `python spy.py -i` | `node spy.js -i` |
| Store only successful numbers | `python spy.py --only-matches` | `node spy.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python spy.py --tamper` | `node spy.js --tamper` |
| Shortcut with npm | - | `npm run spy` &nbsp;or&nbsp; `npm run spy -- 7 12 28` |

Source files: `practical2_python/spy.py` and `practical1_javascript/spy.js`

### 14. Buzz Number

**Rule:** A number that is divisible by 7 or ends with the digit 7.
**Examples:** 7, 14, 17, 21, 27, 28, 70

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python buzz.py` | `node buzz.js` |
| Run with your own values | `python buzz.py 7 12 28` | `node buzz.js 7 12 28` |
| Type values one by one | `python buzz.py -i` | `node buzz.js -i` |
| Store only successful numbers | `python buzz.py --only-matches` | `node buzz.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python buzz.py --tamper` | `node buzz.js --tamper` |
| Shortcut with npm | - | `npm run buzz` &nbsp;or&nbsp; `npm run buzz -- 7 12 28` |

Source files: `practical2_python/buzz.py` and `practical1_javascript/buzz.js`

### 15. Fibonacci Number

**Rule:** A number that appears in the Fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
**Examples:** 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python fibonacci.py` | `node fibonacci.js` |
| Run with your own values | `python fibonacci.py 7 12 28` | `node fibonacci.js 7 12 28` |
| Type values one by one | `python fibonacci.py -i` | `node fibonacci.js -i` |
| Store only successful numbers | `python fibonacci.py --only-matches` | `node fibonacci.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python fibonacci.py --tamper` | `node fibonacci.js --tamper` |
| Shortcut with npm | - | `npm run fibonacci` &nbsp;or&nbsp; `npm run fibonacci -- 7 12 28` |

Source files: `practical2_python/fibonacci.py` and `practical1_javascript/fibonacci.js`

### 16. Perfect Square Number

**Rule:** A number that is the square of a whole number.
**Examples:** 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python perfect_square.py` | `node perfect_square.js` |
| Run with your own values | `python perfect_square.py 7 12 28` | `node perfect_square.js 7 12 28` |
| Type values one by one | `python perfect_square.py -i` | `node perfect_square.js -i` |
| Store only successful numbers | `python perfect_square.py --only-matches` | `node perfect_square.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python perfect_square.py --tamper` | `node perfect_square.js --tamper` |
| Shortcut with npm | - | `npm run perfect_square` &nbsp;or&nbsp; `npm run perfect_square -- 7 12 28` |

Source files: `practical2_python/perfect_square.py` and `practical1_javascript/perfect_square.js`

### 17. Even / Odd Number

**Rule:** Stores every number with the result 'Even number' or 'Odd number'.
**Examples:** Even: 2, 4, 76   Odd: 3, 7, 13

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python even_odd.py` | `node even_odd.js` |
| Run with your own values | `python even_odd.py 7 12 28` | `node even_odd.js 7 12 28` |
| Type values one by one | `python even_odd.py -i` | `node even_odd.js -i` |
| Store only successful numbers | `python even_odd.py --only-matches` | `node even_odd.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python even_odd.py --tamper` | `node even_odd.js --tamper` |
| Shortcut with npm | - | `npm run even_odd` &nbsp;or&nbsp; `npm run even_odd -- 7 12 28` |

Source files: `practical2_python/even_odd.py` and `practical1_javascript/even_odd.js`

### 18. Anagram Check (two statements)

**Rule:** Checks whether two words/sentences are anagrams (same letters, ignoring spaces and case).
**Examples:** "listen" & "silent",  "The eyes" & "They see"

| | Python (Practical 2) | JavaScript (Practical 1) |
|---|---|---|
| Go to folder | `cd practical2_python` | `cd practical1_javascript` |
| Run with sample values | `python anagram.py` | `node anagram.js` |
| Run with your own values | `python anagram.py "The eyes" "They see"` | `node anagram.js "The eyes" "They see"` |
| Type values one by one | `python anagram.py -i` | `node anagram.js -i` |
| Store only successful numbers | `python anagram.py --only-matches` | `node anagram.js --only-matches` |
| Tamper demo (chain becomes invalid) | `python anagram.py --tamper` | `node anagram.js --tamper` |
| Shortcut with npm | - | `npm run anagram` &nbsp;or&nbsp; `npm run anagram -- "The eyes" "They see"` |

Source files: `practical2_python/anagram.py` and `practical1_javascript/anagram.js`

## 6. Run everything / self-test

```bash
# Python
cd practical2_python
python run_all.py        # runs all programs one after another
python selftest.py       # checks each program against known true/false numbers

# JavaScript
cd practical1_javascript
node run_all.js          # or: npm run all
node selftest.js         # or: npm test
```

## 7. How the blockchain works (for viva questions)

1. **Block** - holds `index`, `timestamp`, `inputs`, `result`, `previous hash` and its own `hash`.
2. **Hash** - SHA-256 of `index + timestamp + inputs + result + previous hash`. Changing any field changes the hash.
3. **Genesis block** - the first block (index 0, previous hash `0`), created automatically.
4. **Adding a block** - the program evaluates the number (e.g. is it Armstrong?), then creates a block whose
   `previous hash` is the hash of the last block.
5. **Validation** (`is_valid` / `isValid`) - for each block it recomputes the hash and compares it with the stored
   one, and checks that `previous hash` equals the previous block's hash. Any edit makes the chain invalid
   (try `--tamper`).

## 8. Push to GitHub

```bash
cd blockchain-number-practicals
git init
git add .
git commit -m "Blockchain number practicals"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repository on github.com first and copy its URL.)

## 9. Troubleshooting

| Problem | Fix |
|---|---|
| `python: command not found` | Use `python3 armstrong.py` (Linux/macOS) or install Python and tick "Add to PATH" (Windows) |
| `node: command not found` | Install Node.js from https://nodejs.org and reopen the terminal |
| `ModuleNotFoundError: core` / `Cannot find module './core'` | You are running a file that was copied without `core.py` / `core.js` - keep them in the same folder |
| `Error: give values in groups of 2` | `add` and `anagram` need pairs of values |
| Quotes problem with `anagram` on Windows | Use double quotes: `python anagram.py "The eyes" "They see"` |
