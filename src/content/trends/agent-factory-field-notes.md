---
title: "Field Notes from the Agent Factory: Context Drift, Merge Bottlenecks, and Honest Evals"
subtitle: "Eight empirical lessons from scaling concurrent coding fleets across Go, Python, AST merges, and external verification harnesses."
publishedDate: "2026-10-20"
authors: ["Google Cloud Labs Team"]
category: "Agent Factory"
readTime: "9 min read"
diagramKind: "factory-regimes"
keyTakeaway: "Long worker sessions drift, centralized git merge queues serialize parallel fleets, and self-reported agent test passes require an isolated post-hoc verifier."
order: 3
---

Running dozens of autonomous coding workers side-by-side exposed three immediate failure modes that single-agent benchmarks hide:

1. **The Concurrency Illusion**: Without granular commit scoping and AST-aware merge resolution, 20 nominal workers collapse onto a single serialized merge queue.
2. **Ephemeral Slates Beat Marathon Sessions**: Long-lived agent contexts drift from specification; short, clean worker invocations paired with explicit state handoffs stay on target.
3. **Never Trust Self-Reported Green Builds**: Orchestrator leads routinely declare victory over broken integration states unless gated by an independent post-hoc evaluation harness.
