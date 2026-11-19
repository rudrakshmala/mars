"""
Practical 2 (Python) - Perfect Square Number on a blockchain.

A number that is the square of a whole number.
Examples: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

Run:
    python perfect_square.py                      # uses the sample values
    python perfect_square.py 7 12 28   # your own values
    python perfect_square.py -i                   # type values one by one
    python perfect_square.py --only-matches       # store only successful blocks
    python perfect_square.py --tamper             # show how tampering breaks the chain
"""
from math import isqrt
from core import verdict, run


def is_perfect_square(n):
    r = isqrt(n)
    return r * r == n


def evaluate(n):
    ok = is_perfect_square(n)
    return ok, verdict(ok, "Perfect square")


if __name__ == "__main__":
    run(
        "Perfect Square Number Blockchain",
        evaluate,
        [16, 25, 26, 100, 99],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
