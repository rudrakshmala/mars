"""
Practical 2 (Python) - Armstrong Number on a blockchain.

A number equal to the sum of its digits, each raised to the power of the number of digits.
Examples: 153 = 1^3 + 5^3 + 3^3,  9474 = 9^4 + 4^4 + 7^4 + 4^4

Run:
    python armstrong.py                      # uses the sample values
    python armstrong.py 153 370 12   # your own values
    python armstrong.py -i                   # type values one by one
    python armstrong.py --only-matches       # store only successful blocks
    python armstrong.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_armstrong(n):
    digits = str(n)
    power = len(digits)
    return sum(int(d) ** power for d in digits) == n


def evaluate(n):
    ok = is_armstrong(n)
    return ok, verdict(ok, "Armstrong number")


if __name__ == "__main__":
    run(
        "Armstrong Number Blockchain",
        evaluate,
        [12, 153, 370, 9474, 9563],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
