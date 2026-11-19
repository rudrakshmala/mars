"""
Practical 2 (Python) - Prime Number on a blockchain.

A number greater than 1 that has no divisors other than 1 and itself.
Examples: 2, 3, 5, 7, 11, 13 ...

Run:
    python prime.py                      # uses the sample values
    python prime.py 7 12 28   # your own values
    python prime.py -i                   # type values one by one
    python prime.py --only-matches       # store only successful blocks
    python prime.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_prime(n):
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True


def evaluate(n):
    ok = is_prime(n)
    return ok, verdict(ok, "Prime number")


if __name__ == "__main__":
    run(
        "Prime Number Blockchain",
        evaluate,
        [76, 7, 3, 1, 97],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
