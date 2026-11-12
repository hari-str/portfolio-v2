"use client";

import { ASSISTANT_SUGGESTIONS } from "@/data/assistant-knowledge";
import { answerPortfolioQuestion } from "@/lib/assistant";
import { cn } from "@/lib/utils";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Ask about Hariharan's experience, projects, AWS work, AI product features, or how to contact him. Answers come from his verified portfolio knowledge base.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, pending]);

  async function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || pending) return;

    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: trimmed,
    };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setPending(true);

    await new Promise((resolve) => window.setTimeout(resolve, 350));
    const result = answerPortfolioQuestion(trimmed);
    setMessages((current) => [
      ...current,
      {
        id: `a-${Date.now()}`,
        role: "assistant",
        content: result.answer,
      },
    ]);
    setPending(false);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_hsl(var(--primary)/0.35)] transition hover:brightness-110",
          open && "pointer-events-none opacity-0"
        )}
        aria-label="Ask about my experience"
      >
        <Sparkles className="size-4" />
        <span className="hidden sm:inline">Ask about my experience</span>
        <MessageCircle className="size-4 sm:hidden" />
      </button>

      <div
        className={cn(
          "fixed bottom-5 right-5 z-50 flex w-[min(100vw-1.5rem,24rem)] flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-2xl backdrop-blur-xl transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
        role="dialog"
        aria-label="Portfolio assistant"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
          <div>
            <p className="text-sm font-medium">Portfolio Assistant</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Local knowledge base
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex size-8 items-center justify-center rounded-lg border border-border/70 text-muted-foreground hover:text-foreground"
            aria-label="Close assistant"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="max-h-[50vh] space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                message.role === "assistant"
                  ? "bg-elevated text-muted-foreground"
                  : "ml-auto bg-primary text-primary-foreground"
              )}
            >
              {message.content}
            </div>
          ))}
          {pending ? (
            <div className="inline-flex items-center gap-1 rounded-2xl bg-elevated px-3.5 py-2.5 text-muted-foreground">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              <span className="size-1.5 animate-pulse rounded-full bg-primary [animation-delay:120ms]" />
              <span className="size-1.5 animate-pulse rounded-full bg-primary [animation-delay:240ms]" />
            </div>
          ) : null}
          <div ref={endRef} />
        </div>

        <div className="space-y-3 border-t border-border/70 px-4 py-3">
          <div className="flex flex-wrap gap-2">
            {ASSISTANT_SUGGESTIONS.slice(0, 3).map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => void ask(suggestion)}
                className="rounded-full border border-border/70 px-2.5 py-1 text-[11px] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              >
                {suggestion}
              </button>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question..."
              className="h-10 flex-1 rounded-xl border border-border/70 bg-background px-3 text-sm outline-none ring-primary/40 placeholder:text-muted-foreground focus:ring-2"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
              aria-label="Send question"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
