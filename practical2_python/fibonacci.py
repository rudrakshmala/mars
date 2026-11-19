"""
Practical 2 (Python) - Fibonacci Number on a blockchain.

A number that appears in the Fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
Examples: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

Run:
    python fibonacci.py                      # uses the sample values
    python fibonacci.py 7 12 28   # your own values
    python fibonacci.py -i                   # type values one by one
    python fibonacci.py --only-matches       # store only successful blocks
    python fibonacci.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_fibonacci(n):
    a, b = 0, 1
    while a < n:
        a, b = b, a + b
    return a == n


def evaluate(n):
    ok = is_fibonacci(n)
    return ok, verdict(ok, "Fibonacci number")


if __name__ == "__main__":
    run(
        "Fibonacci Number Blockchain",
        evaluate,
        [0, 1, 8, 13, 20, 55],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
