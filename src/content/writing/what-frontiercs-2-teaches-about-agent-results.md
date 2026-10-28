---
title: 'What FrontierCS 2 teaches about reading agent results'
description: 'I turned the FrontierCS 2 benchmark into an open course. Three details from its pass rule and leaderboard change how I read any agent score.'
publishedAt: 2026-10-28
language: en
topics: [AI evaluation, Coding agents, Teaching]
audience: developers, students, and research readers
draft: false
---

[FrontierCS 2](https://frontier-cs.org/) asks a question that most coding benchmarks avoid: can an AI agent do computer-science research? Each of its 48 tasks starts from a published paper and the code its authors released. The builders delete the paper's key contribution, such as the queue logic in BBQ or the scheduling decision in Shockwave, and the agent has to write it back. I am one of the authors of the [paper](/publications/#mang2026frontiercs2), and I have now built an open course on it: [FrontierCS 2, one lecture per field](https://boxi-cs.github.io/frontiercs2/), fourteen lectures in all, from an introduction through MLSys, databases, cryptography, and robotics.

Writing the lectures changed how I read agent results. Three details from the first lecture do most of the work.

## A pass means beating the authors, on every check

A run passes only when its final submission beats the human reference, which is the authors' own code, on every metric the task checks and on every hidden workload. Some checks ask for a margin. On SVG-EAR, the latency has to be at most 0.96 of the reference's, and image quality has to stay within small margins of it.

So a candidate that is 3% faster fails, and so does one that is 10% faster but loses too much quality. The course turns this into a ten-line function you can change and rerun. The point is that "better than the reference" is many conditions at once, and a headline number hides which one failed.

The same idea explains a case in the notes: on KV Compaction, Claude Opus 5.5 has the top score and sits above the human reference, yet its answers fall short of the reference's accuracy on 2 of the 24 articles, so the run fails. A high average can hide a loss in one place that was bought with a gain in another.

## The agent has to choose its own final version

During a run the agent sees a score on development workloads for every patch it submits. The hidden workloads stay with the judge, and only the version the agent names as its final submission is scored on them.

That makes choosing part of the work. The first lecture uses a toy run with five submissions to show the failure: the version with the best development score was fitted to the development workloads and does worse on the hidden ones, while the last version beats the reference. The numbers in that toy are illustrations, not benchmark data. What the benchmark reports is real: it scores what the agent chose, even when an earlier version would have passed.

When you read any agent evaluation, ask what the agent could see while it worked, and who decided which answer counted.

## A leaderboard row is a model and its harness

Each model runs in its own agent harness: Claude Opus 5.5 in Claude Code, the GPT-6 models in Codex CLI, Gemini 4 Argon in Antigravity and in Pi. The harness matters. Under Pi, a provider's content filter refused a request and ended the run in 10 of Gemini 4 Argon's 48 runs, while Antigravity retries refused requests. As of October 26, 2026, the same model shows a 54% pass rate under one harness and 40% under the other.

So "model X scores Y" is shorthand. The tools, the retry policy, and the way a run ends are part of the measurement. I wrote the lecture so that learners predict this gap before the page explains it.

## How the course is built

Each later lecture takes one field and, for every task in it, covers four things: the idea from the paper on a small example you can run, what the agent writes, how the task is judged, and what the agents did. The Python models are ours and run offline, every program has been run, and every output shown is the real output. We use only public material: the task statements the agent reads, the papers, and the pages on frontier-cs.org. Nothing comes from a task's judge, so the course does not spoil the tasks for anyone who wants to run them.

Results change, so each lecture states the date of its numbers. If you want one place to start, Lecture 4 (Network) shows three different ways a run can pass or fail.

The course sits with the rest of my [interactive course notes](/courses/).
