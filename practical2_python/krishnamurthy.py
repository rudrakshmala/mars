"""
Practical 2 (Python) - Krishnamurthy (Strong) Number on a blockchain.

A number equal to the sum of the factorials of its digits. Also called a Strong number.
Examples: 145 = 1! + 4! + 5! = 1 + 24 + 120,  also 1, 2, 40585

Run:
    python krishnamurthy.py                      # uses the sample values
    python krishnamurthy.py 7 12 28   # your own values
    python krishnamurthy.py -i                   # type values one by one
    python krishnamurthy.py --only-matches       # store only successful blocks
    python krishnamurthy.py --tamper             # show how tampering breaks the chain
"""
from math import factorial
from core import verdict, run


def is_krishnamurthy(n):
    return n > 0 and sum(factorial(int(d)) for d in str(n)) == n


def evaluate(n):
    ok = is_krishnamurthy(n)
    return ok, verdict(ok, "Krishnamurthy number")


if __name__ == "__main__":
    run(
        "Krishnamurthy (Strong) Number Blockchain",
        evaluate,
        [1, 2, 145, 40585, 123],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
