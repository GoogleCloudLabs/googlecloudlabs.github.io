// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    code: z.string(),
    status: z.enum(['Live Rig', 'Benchmark Harness', 'Sprint Artifact']),
    stack: z.array(z.string()),
    repoUrl: z.string().url(),
    highlightMetric: z.string(),
    order: z.number(),
  }),
});

const vids = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vids' }),
  schema: z.object({
    title: z.string(),
    episodeNumber: z.string(),
    duration: z.string(),
    publishedDate: z.string(),
    summary: z.string(),
    youtubeUrl: z.string().url(),
    speakers: z.array(z.string()),
    audioFreqHz: z.number(),
    order: z.number(),
  }),
});

const trends = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trends' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    publishedDate: z.string(),
    authors: z.array(z.string()),
    category: z.enum(['Behavioral Eval', 'Agent Factory', 'Multi-Model Security']),
    readTime: z.string(),
    externalPaperUrl: z.string().url().optional(),
    diagramKind: z.enum(['policing-flow', 'gemma-order-chart', 'factory-regimes']),
    keyTakeaway: z.string(),
    order: z.number(),
  }),
});

export const collections = { experiments, vids, trends };
