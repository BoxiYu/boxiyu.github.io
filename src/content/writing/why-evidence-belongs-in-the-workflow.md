---
title: 'Why evidence belongs in the workflow'
description: 'A product should make the important evidence easy to inspect, from a student hint to a coding-agent patch.'
publishedAt: 2026-10-01
language: en
topics: [Product practice, Trustworthy AI]
audience: educators, engineers, and research readers
draft: false
featured: true
---

When an AI system helps someone work, the useful question is not only whether it produced an answer. It is whether the person can see enough of the reasoning, checks, and trade-offs to decide what happens next.

That principle connects my work on coding-agent evaluation with the AI education tools I am building. A coding agent can propose a patch; a teacher can generate an assessment; a student can ask for a hint. In each case, the system should leave behind a trail that a person can inspect.

## Three places evidence can show up

For a student, evidence might be a hint that reveals one step at a time instead of giving away the answer. For a teacher, it might be a rubric decision that can be reviewed before feedback reaches a student. For an engineering team, it might be a test that fails on a plausible incorrect patch rather than only on an obvious regression.

The interface matters because evidence that is difficult to find is evidence that will not be used. A good workflow puts the relevant check beside the decision it supports.

## Keep the person in the loop

Automation is most useful when it shortens the path to a well-informed decision. It should generate a candidate, surface the uncertainty, and make the next check easy. The final decision still needs a person who understands the goal and can explain why the result is acceptable.

That is the idea behind [OneAI](/products/#oneai), an AI education workspace that connects student guidance, assessment generation, rubric review, and student-level error reports. The same idea appears in [UTBoost](/research/#utboost), where stronger tests make it harder for an incorrect patch to count as a fix.

Evidence does not make a system infallible. It makes its claims easier to question, improve, and use responsibly.
