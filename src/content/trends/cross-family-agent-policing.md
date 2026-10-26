---
title: "Cross-Family vs. Same-Family Policing in Autonomous Agent Marketplaces"
subtitle: "Why pairing models from the same family caused catastrophic 40%–56% human escalation in adversarial bid screening."
publishedDate: "2026-10-15"
authors: ["DevRel Labs Research"]
category: "Multi-Model Security"
readTime: "6 min read"
diagramKind: "policing-flow"
keyTakeaway: "Heterogeneous model pairs blocked 77.4% of adversarial bids with 81.6% valid approval and 19.0% escalation; same-family pairs punted up to 56.2% of decisions to humans."
order: 2
---

In an autonomous marketplace where buyer and seller agents negotiate compute capacity, a single model policing itself quickly succumbs to prompt injection and collusive pricing. To test multi-model policing, we evaluated heterogeneous cross-family pairings against same-family pairings across 1,110 simulated bids.

Same-family pairings degraded sharply in both directions: shared caution and correlated blind spots pushed human escalation between **40.0% and 56.2%** while blocking only **31.0%–36.4%** of adversarial bids. Pairing a fast, decisive lead model with an independent cross-family verifier raised attack blocking to **77.4%** and valid bid throughput to **81.6%** while cutting human escalation down to **19.0%**.
