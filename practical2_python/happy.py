"""
Practical 2 (Python) - Happy Number on a blockchain.

Repeatedly replace the number by the sum of the squares of its digits. If you reach 1 it is happy; if it loops forever it is not.
Examples: 1, 7, 10, 13, 19, 23, 28, 31 ...  (e.g. 13 -> 1+9=10 -> 1+0=1)

Run:
    python happy.py                      # uses the sample values
    python happy.py 7 12 28   # your own values
    python happy.py -i                   # type values one by one
    python happy.py --only-matches       # store only successful blocks
    python happy.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_happy(n):
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = sum(int(d) ** 2 for d in str(n))
    return n == 1


def evaluate(n):
    ok = is_happy(n)
    return ok, verdict(ok, "Happy number")


if __name__ == "__main__":
    run(
        "Happy Number Blockchain",
        evaluate,
        [28, 76, 17, 13, 21],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
