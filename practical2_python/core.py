"""
Shared blockchain engine for Practical 2 (Python).

Every number type (armstrong.py, prime.py, ...) imports this file, so it
must stay in the same folder.  You normally never need to edit it, except
AUTHOR below (or set the AUTHOR_NAME environment variable).
"""
import argparse
import datetime
import hashlib
import os
import sys

AUTHOR = os.environ.get("AUTHOR_NAME", "Saniya Mahadik")
LINE = "-" * 95


def verdict(ok, label):
    """'Armstrong number' if ok else 'Not Armstrong number'."""
    return label if ok else "Not " + label


class Block:
    def __init__(self, index, inputs, result, prev_hash):
        self.index = index
        self.timestamp = str(datetime.datetime.now())
        self.inputs = inputs
        self.result = result
        self.prev_hash = prev_hash
        self.hash = self.calc_hash()

    def calc_hash(self):
        data = f"{self.index}{self.timestamp}{self.inputs}{self.result}{self.prev_hash}"
        return hashlib.sha256(data.encode()).hexdigest()


class Blockchain:
    def __init__(self, title, evaluate):
        self.title = title
        self.evaluate = evaluate          # evaluate(*inputs) -> (matched, result_text)
        self.chain = [Block(0, "Genesis", "Genesis Block", "0")]

    def add_block(self, *inputs, only_matches=False):
        matched, result = self.evaluate(*inputs)
        shown = ", ".join(str(x) for x in inputs)
        if only_matches and not matched:
            print(f"Skipped (not stored): {shown} -> {result}")
            return False
        self.chain.append(Block(len(self.chain), shown, result, self.chain[-1].hash))
        return True

    def display(self):
        for b in self.chain:
            print("Block            :", b.index)
            print("Timestamp        :", b.timestamp)
            print("Input(s)         :", b.inputs)
            print("Result           :", b.result)
            print("Previous hash    :", b.prev_hash)
            print("Current hash     :", b.hash)
            print(LINE)

    def is_valid(self):
        for i in range(1, len(self.chain)):
            cur, prev = self.chain[i], self.chain[i - 1]
            if cur.hash != cur.calc_hash():
                return False
            if cur.prev_hash != prev.hash:
                return False
        return True


def _parse(raw, kind):
    if kind is int:
        try:
            value = int(raw)
        except ValueError:
            sys.exit(f"Error: '{raw}' is not a whole number.")
        if value < 0:
            sys.exit("Error: please use non-negative whole numbers.")
        return value
    return raw


def run(title, evaluate, defaults, kind=int, arity=1, prompts=None):
    parser = argparse.ArgumentParser(description=title)
    parser.add_argument("values", nargs="*",
                        help=f"values to check ({arity} value(s) per block); omit to use the sample values")
    parser.add_argument("-i", "--interactive", action="store_true",
                        help="type the values in one by one")
    parser.add_argument("--only-matches", action="store_true",
                        help="store a block only when the check passes")
    parser.add_argument("--tamper", action="store_true",
                        help="demo: change a block afterwards and show the chain becomes invalid")
    args = parser.parse_args()

    prompts = prompts or [f"Enter value {i + 1}" for i in range(arity)]
    groups = []
    if args.interactive:
        count = int(input("How many blocks do you want to add? "))
        for _ in range(count):
            groups.append(tuple(_parse(input(p + ": "), kind) for p in prompts))
    elif args.values:
        if len(args.values) % arity:
            sys.exit(f"Error: give values in groups of {arity}.")
        vals = [_parse(v, kind) for v in args.values]
        groups = [tuple(vals[i:i + arity]) for i in range(0, len(vals), arity)]
    else:
        groups = [d if isinstance(d, tuple) else (d,) for d in defaults]

    print(f"\nDeveloped by {AUTHOR}")
    print(f"=== {title} ===\n")
    bc = Blockchain(title, evaluate)
    for g in groups:
        bc.add_block(*g, only_matches=args.only_matches)
    bc.display()
    print("Chain valid:", bc.is_valid())

    if args.tamper:
        if len(bc.chain) > 1:
            bc.chain[1].result = "TAMPERED DATA"
            print("\n[demo] Block 1 was modified without recomputing its hash...")
            print("Chain valid:", bc.is_valid())
        else:
            print("\n[demo] Nothing to tamper with - no blocks were stored.")
