"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Input, Textarea, Label } from "./Input";
import { Button } from "./Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-forest/20 bg-forest-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-forest" />
        <h3 className="font-display text-lg font-semibold text-charcoal">Message sent</h3>
        <p className="text-sm text-charcoal/60">
          Thanks for reaching out — our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" required placeholder="+91 00000 00000" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" name="email" required placeholder="you@example.com" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required placeholder="Tell us what you need…" />
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending…" : "Send message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
