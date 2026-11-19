"""
Practical 2 (Python) - Buzz Number on a blockchain.

A number that is divisible by 7 or ends with the digit 7.
Examples: 7, 14, 17, 21, 27, 28, 70

Run:
    python buzz.py                      # uses the sample values
    python buzz.py 7 12 28   # your own values
    python buzz.py -i                   # type values one by one
    python buzz.py --only-matches       # store only successful blocks
    python buzz.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_buzz(n):
    return n % 7 == 0 or n % 10 == 7


def evaluate(n):
    ok = is_buzz(n)
    return ok, verdict(ok, "Buzz number")


if __name__ == "__main__":
    run(
        "Buzz Number Blockchain",
        evaluate,
        [7, 14, 17, 20, 49],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
