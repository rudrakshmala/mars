"""
Practical 2 (Python) - Spy Number on a blockchain.

A number whose sum of digits equals the product of its digits.
Examples: 22 (2+2 = 2*2),  123 (1+2+3 = 1*2*3),  1124,  1412

Run:
    python spy.py                      # uses the sample values
    python spy.py 7 12 28   # your own values
    python spy.py -i                   # type values one by one
    python spy.py --only-matches       # store only successful blocks
    python spy.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_spy(n):
    digits = [int(d) for d in str(n)]
    product = 1
    for d in digits:
        product *= d
    return sum(digits) == product


def evaluate(n):
    ok = is_spy(n)
    return ok, verdict(ok, "Spy number")


if __name__ == "__main__":
    run(
        "Spy Number Blockchain",
        evaluate,
        [22, 123, 1124, 14, 100],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
