"""Runs every number-type blockchain once with its sample values."""
import subprocess
import sys
from pathlib import Path

here = Path(__file__).parent
SCRIPTS = ["add", "prime", "happy", "armstrong", "perfect", "krishnamurthy", "palindrome", "automorphic", "neon", "harshad", "disarium", "magic", "spy", "buzz", "fibonacci", "perfect_square", "even_odd", "anagram"]

for name in SCRIPTS:
    print("\n" + "#" * 95)
    print("#  " + name + ".py")
    print("#" * 95)
    subprocess.run([sys.executable, str(here / (name + ".py"))], check=True)
