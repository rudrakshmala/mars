"""
Practical 2 (Python) - Neon Number on a blockchain.

A number equal to the sum of the digits of its square.
Examples: 9 (9^2 = 81 -> 8+1 = 9),  0, 1

Run:
    python neon.py                      # uses the sample values
    python neon.py 7 12 28   # your own values
    python neon.py -i                   # type values one by one
    python neon.py --only-matches       # store only successful blocks
    python neon.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_neon(n):
    return sum(int(d) for d in str(n * n)) == n


def evaluate(n):
    ok = is_neon(n)
    return ok, verdict(ok, "Neon number")


if __name__ == "__main__":
    run(
        "Neon Number Blockchain",
        evaluate,
        [0, 1, 9, 12, 45],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
