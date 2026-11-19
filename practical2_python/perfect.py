"""
Practical 2 (Python) - Perfect Number on a blockchain.

A number equal to the sum of its proper divisors (all divisors except the number itself).
Examples: 6 = 1+2+3,  28 = 1+2+4+7+14,  496,  8128

Run:
    python perfect.py                      # uses the sample values
    python perfect.py 7 12 28   # your own values
    python perfect.py -i                   # type values one by one
    python perfect.py --only-matches       # store only successful blocks
    python perfect.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_perfect(n):
    if n < 2:
        return False
    total = 1
    i = 2
    while i * i <= n:
        if n % i == 0:
            total += i
            if i != n // i:
                total += n // i
        i += 1
    return total == n


def evaluate(n):
    ok = is_perfect(n)
    return ok, verdict(ok, "Perfect number")


if __name__ == "__main__":
    run(
        "Perfect Number Blockchain",
        evaluate,
        [6, 28, 12, 496, 100],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
