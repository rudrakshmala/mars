"""
Practical 2 (Python) - Harshad (Niven) Number on a blockchain.

A number that is divisible by the sum of its own digits.
Examples: 18 (1+8 = 9, 18/9 = 2),  21, 12, 100, 153

Run:
    python harshad.py                      # uses the sample values
    python harshad.py 7 12 28   # your own values
    python harshad.py -i                   # type values one by one
    python harshad.py --only-matches       # store only successful blocks
    python harshad.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_harshad(n):
    return n > 0 and n % sum(int(d) for d in str(n)) == 0


def evaluate(n):
    ok = is_harshad(n)
    return ok, verdict(ok, "Harshad number")


if __name__ == "__main__":
    run(
        "Harshad (Niven) Number Blockchain",
        evaluate,
        [18, 21, 19, 153, 100],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
