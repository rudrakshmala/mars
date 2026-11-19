"""
Practical 2 (Python) - Even / Odd Number on a blockchain.

Stores every number with the result 'Even number' or 'Odd number'.
Examples: Even: 2, 4, 76   Odd: 3, 7, 13

Run:
    python even_odd.py                      # uses the sample values
    python even_odd.py 7 12 28   # your own values
    python even_odd.py -i                   # type values one by one
    python even_odd.py --only-matches       # store only successful blocks
    python even_odd.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_even(n):
    return n % 2 == 0


def evaluate(n):
    ok = is_even(n)
    return ok, ("Even number" if ok else "Odd number")


if __name__ == "__main__":
    run(
        "Even / Odd Number Blockchain",
        evaluate,
        [76, 7, 3, 28],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
