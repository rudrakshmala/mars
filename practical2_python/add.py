"""
Practical 2 (Python) - Addition of Two Numbers on a blockchain.

Adds two numbers and stores both inputs and the sum inside each block.
Examples: 23 + 76 = 99

Run:
    python add.py                      # uses the sample values
    python add.py 23 76 5 5   # your own values
    python add.py -i                   # type values one by one
    python add.py --only-matches       # store only successful blocks
    python add.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def evaluate(a, b):
    total = a + b
    return True, f"Sum = {total}"


if __name__ == "__main__":
    run(
        "Addition of Two Numbers Blockchain",
        evaluate,
        [(23, 76), (32, 78), (3, 8)],
        kind=int,
        arity=2,
        prompts=["First number", "Second number"],
    )
