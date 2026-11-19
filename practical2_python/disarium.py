"""
Practical 2 (Python) - Disarium Number on a blockchain.

A number equal to the sum of its digits raised to the power of their positions (1-based, from the left).
Examples: 89 = 8^1 + 9^2,  135 = 1^1 + 3^2 + 5^3,  175,  518

Run:
    python disarium.py                      # uses the sample values
    python disarium.py 7 12 28   # your own values
    python disarium.py -i                   # type values one by one
    python disarium.py --only-matches       # store only successful blocks
    python disarium.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_disarium(n):
    return sum(int(d) ** (i + 1) for i, d in enumerate(str(n))) == n


def evaluate(n):
    ok = is_disarium(n)
    return ok, verdict(ok, "Disarium number")


if __name__ == "__main__":
    run(
        "Disarium Number Blockchain",
        evaluate,
        [89, 135, 175, 518, 100],
        kind=int,
        arity=1,
        prompts=["Enter a number"],
    )
