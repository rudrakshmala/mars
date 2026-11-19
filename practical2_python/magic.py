"""
Practical 2 (Python) - Magic Number on a blockchain.

Keep adding the digits until a single digit is left. If that digit is 1, it is a magic number.
Examples: 19 (1+9 = 10 -> 1),  1729,  28 (2+8 = 10 -> 1),  1, 10

Run:
    python magic.py                      # uses the sample values
    python magic.py 7 12 28   # your own values
    python magic.py -i                   # type values one by one
    python magic.py --only-matches       # store only successful blocks
    python magic.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_magic(n):
    if n <= 0:
        return False
    while n > 9:
        n = sum(int(d) for d in str(n))
    return n == 1


def evaluate(n):
    ok = is_magic(n)
    return ok, verdict(ok, "Magic number")


if __name__ == "__main__":
    run(
        "Magic Number Blockchain",
        evaluate,
        [19, 28, 1729, 56, 10],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
