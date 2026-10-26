---
title: "Words Speak Louder Than Order: A Behavioral Evaluation of Gemma 4"
subtitle: "Four-way counterbalanced log-likelihood probing shows semantic authority framing outweighs presentation order by ~4:1."
publishedDate: "2026-09-28"
authors: ["Amanda Fitch"]
category: "Behavioral Eval"
readTime: "7 min read"
externalPaperUrl: "https://arxiv.org/abs/2609.30716"
diagramKind: "gemma-order-chart"
keyTakeaway: "Semantic source framing (+1.054 nats) dominates prompt order (-0.265 nats) by ~4:1 across 784 forward passes, while surface phrasing shifts positional sensitivity by ~5x."
order: 1
---

When instructions conflict inside an agent harness, does a model obey what comes first or who appears to speak with authority? Across 784 counterbalanced forward passes on `google/gemma-4-e4b`, semantic source framing outweighed presentation order by roughly **4:1** (`+1.054` vs. `-0.265` nats; item-by-item margin `+0.774` nats).

Even more surprisingly, primacy bias fluctuated nearly **5x** (`-0.172` to `-0.884` nats) purely from minor surface wording changes, driven by verbatim structural repetition rather than short label cues. Harness authors cannot treat prompt position as a reliable privilege boundary without testing phrasing invariance directly.
