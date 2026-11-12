import {
  ASSISTANT_FALLBACK,
  ASSISTANT_KNOWLEDGE,
  type AssistantQA,
} from "@/data/assistant-knowledge";

export type AssistantResponse = {
  answer: string;
  matchedId: string | null;
  source: "knowledge-base" | "fallback";
};

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9+\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreMatch(query: string, entry: AssistantQA) {
  const normalized = normalize(query);
  let score = 0;

  if (normalize(entry.question) === normalized) score += 100;

  for (const keyword of entry.keywords) {
    const key = normalize(keyword);
    if (!key) continue;
    if (normalized.includes(key)) score += key.length > 4 ? 12 : 8;
  }

  const queryTokens = normalized.split(" ").filter((token) => token.length > 2);
  for (const token of queryTokens) {
    if (entry.keywords.some((keyword) => normalize(keyword).includes(token))) {
      score += 3;
    }
  }

  return score;
}

/**
 * Deterministic local assistant. Extensible later via a secure server route
 * that can call an LLM without exposing API keys to the client.
 */
export function answerPortfolioQuestion(query: string): AssistantResponse {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      answer: "Ask a question about Hariharan's experience, projects, or skills.",
      matchedId: null,
      source: "fallback",
    };
  }

  let best: { entry: AssistantQA; score: number } | null = null;

  for (const entry of ASSISTANT_KNOWLEDGE) {
    const score = scoreMatch(trimmed, entry);
    if (!best || score > best.score) {
      best = { entry, score };
    }
  }

  if (!best || best.score < 8) {
    return {
      answer: ASSISTANT_FALLBACK,
      matchedId: null,
      source: "fallback",
    };
  }

  return {
    answer: best.entry.answer,
    matchedId: best.entry.id,
    source: "knowledge-base",
  };
}
