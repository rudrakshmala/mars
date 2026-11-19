"""
Practical 2 (Python) - Palindrome Number on a blockchain.

A number that reads the same forwards and backwards.
Examples: 121, 1331, 12321, 7

Run:
    python palindrome.py                      # uses the sample values
    python palindrome.py 7 12 28   # your own values
    python palindrome.py -i                   # type values one by one
    python palindrome.py --only-matches       # store only successful blocks
    python palindrome.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_palindrome(n):
    s = str(n)
    return s == s[::-1]


def evaluate(n):
    ok = is_palindrome(n)
    return ok, verdict(ok, "Palindrome number")


if __name__ == "__main__":
    run(
        "Palindrome Number Blockchain",
        evaluate,
        [121, 123, 1331, 12321, 4554],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
