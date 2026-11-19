"""
Practical 2 (Python) - Automorphic Number on a blockchain.

A number whose square ends with the number itself.
Examples: 5 (25), 6 (36), 25 (625), 76 (5776), 376 (141376)

Run:
    python automorphic.py                      # uses the sample values
    python automorphic.py 7 12 28   # your own values
    python automorphic.py -i                   # type values one by one
    python automorphic.py --only-matches       # store only successful blocks
    python automorphic.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_automorphic(n):
    return str(n * n).endswith(str(n))


def evaluate(n):
    ok = is_automorphic(n)
    return ok, verdict(ok, "Automorphic number")


if __name__ == "__main__":
    run(
        "Automorphic Number Blockchain",
        evaluate,
        [5, 6, 25, 76, 12, 376],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
