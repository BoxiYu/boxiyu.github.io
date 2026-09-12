---
title: 'Passing tests is not the same as being correct'
description: 'A small function reveals a useful distinction between evidence, coverage, and correctness in AI-assisted programming.'
publishedAt: 2026-09-08
language: en
topics: [Software testing, Coding agents]
audience: developers and technical students
draft: true
featured: true
series: Evaluating AI in practice
order: 1
---

A coding agent produces a patch. The tests pass. Is the task solved?

The answer depends on what the tests establish. A green result means that the program met the assertions in the cases that actually ran, under the conditions of that run. It does not automatically mean that the program satisfies the intended specification.

This distinction is easier to see in a very small program.

## A bug hiding in plain sight

Suppose the contract is to return the largest integer in a non-empty list of integers:

```python
def largest(numbers):
    best = 0
    for n in numbers:
        best = max(best, n)
    return best
```

Both of these checks pass:

```python
assert largest([2, 7, 4]) == 7
assert largest([0, 3, 1]) == 3
```

Yet the function is incorrect. On `[-8, -2, -5]`, it returns `0`. The expected answer is `-2`. The initial value silently assumed that the answer would never be negative.

You can [step through this example](/education/) before reading on.

## What the green result actually told us

The two checks provide evidence about two inputs. Both exercise a similar assumption: at least one input is non-negative. Adding many more positive-only cases could preserve that blind spot.

The issue is not simply the number of tests. It is whether the inputs and assertions distinguish a correct implementation from plausible incorrect ones.

Code coverage is useful, but it answers a different question. Executing the return statement, or even every line in this function, does not establish that the initial value was appropriate for every input class.

## Start with the contract

A better workflow begins with a question: what must be true of the result?

For this function, given a non-empty list of integers:

- The result must be an element of the input.
- No input element may be greater than the result.

Those properties immediately make the negative-only case interesting. They also suggest cases involving a single element, repeated maxima, and zero. Empty input is outside this contract; the interface should reject it or specify a separate behavior.

One implementation is:

```python
def largest(numbers):
    if not numbers:
        raise ValueError("expected a non-empty list")
    best = numbers[0]
    for n in numbers[1:]:
        best = max(best, n)
    return best
```

For the stated integer-list contract, initializing from the first element removes the assumption that caused the bug. This does not define behavior for arbitrary Python objects or floating-point values such as NaN; those require separate decisions.

## Carry the distinction into AI evaluation

When a test suite scores a generated patch, the same distinction matters. A passing patch may implement the intended behavior, or it may happen to satisfy an incomplete set of assertions. The score alone does not tell us which explanation applies.

Useful evaluation questions include:

- Which behaviors are represented by the tests?
- What plausible incorrect patches could still pass?
- Are the checks independent of the system producing the answer?
- Have the tests themselves been checked for errors?

These questions motivate work on more rigorous coding-agent evaluation, including [UTBoost](/publications/#yu2025utboost) and [SWE-ABS](/publications/#yu2026sweabs). The toy example here illustrates the general distinction; it is not an experiment from either paper.

## Try it yourself

Write an incorrect version of `largest` that passes the original two checks in a different way. Then add the smallest test that separates it from the intended implementation.

The exercise changes the question from "Do I have enough tests?" to "Which mistakes can my tests detect?"

## References

- [UTBoost: Rigorous Evaluation of Coding Agents on SWE-Bench](https://arxiv.org/abs/2506.09289)
- [Retromorphic Testing: A New Approach to the Test Oracle Problem](https://arxiv.org/abs/2310.06433)
