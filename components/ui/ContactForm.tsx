"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 rounded-xl border border-forest/20 bg-forest-50 p-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
          >
            <CheckCircle2 className="h-10 w-10 text-forest" />
          </motion.div>
          <h3 className="font-display text-lg font-semibold text-charcoal">Message sent</h3>
          <p className="text-sm text-charcoal/60">
            Thanks for reaching out — our team will get back to you within one business day.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
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
        </motion.form>
      )}
    </AnimatePresence>
  );
}
