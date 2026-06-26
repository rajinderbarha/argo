"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Input, Textarea, Label, Select } from "./Input";
import { Button } from "./Button";
import { products } from "@/data/products";

export function InquiryForm({ defaultProduct }: { defaultProduct?: string }) {
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
          <h3 className="font-display text-lg font-semibold text-charcoal">Inquiry received</h3>
          <p className="text-sm text-charcoal/60">
            Our B2B sales team will follow up with a quote and lead time within one business day.
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
          <Label htmlFor="inq-name">Full name</Label>
          <Input id="inq-name" name="name" required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="inq-company">Company / dealership</Label>
          <Input id="inq-company" name="company" required placeholder="Company name" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="inq-email">Email address</Label>
          <Input id="inq-email" type="email" name="email" required placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="inq-phone">Phone number</Label>
          <Input id="inq-phone" name="phone" required placeholder="+91 00000 00000" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="inq-product">Product interested in</Label>
          <Select id="inq-product" name="product" defaultValue={defaultProduct ?? ""}>
            <option value="" disabled>
              Select a product
            </option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="other">Other / not listed</option>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="inq-qty">Quantity</Label>
          <Input id="inq-qty" name="quantity" type="number" min={1} placeholder="e.g. 25 units" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="inq-message">Message</Label>
        <Textarea
          id="inq-message"
          name="message"
          placeholder="Tell us about delivery timeline, region, colour preference…"
        />
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Submitting…" : "Submit inquiry"}
        <Send className="h-4 w-4" />
      </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
