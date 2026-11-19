"""
Practical 2 (Python) - Anagram Check (two statements) on a blockchain.

Checks whether two words/sentences are anagrams (same letters, ignoring spaces and case).
Examples: "listen" & "silent",  "The eyes" & "They see"

Run:
    python anagram.py                      # uses the sample values
    python anagram.py listen silent hello world   # your own values
    python anagram.py -i                   # type values one by one
    python anagram.py --only-matches       # store only successful blocks
    python anagram.py --tamper             # show how tampering breaks the chain
"""
from core import verdict, run


def is_anagram(a, b):
    a = a.replace(" ", "").lower()
    b = b.replace(" ", "").lower()
    return sorted(a) == sorted(b)


def evaluate(a, b):
    ok = is_anagram(a, b)
    return ok, verdict(ok, "Anagram")


if __name__ == "__main__":
    run(
        "Anagram Check (two statements) Blockchain",
        evaluate,
        [('listen', 'silent'), ('hello', 'world'), ('The eyes', 'They see')],
        kind=str,
        arity=2,
        prompts=["First statement", "Second statement"],
    )
