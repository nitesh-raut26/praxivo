"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const projectTypes = [
  "New product / MVP",
  "Website / marketing site",
  "Mobile app",
  "AI / data feature",
  "Something else",
];

const budgets = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

const fieldBase =
  "w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors placeholder:text-faint focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: projectTypes[0],
    budget: budgets[4],
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New project enquiry — ${form.name || "Praxivo"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.type}`,
      `Budget: ${form.budget}`,
      "",
      "Details:",
      form.message,
    ].join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-white p-10 text-center shadow-soft">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Check className="size-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink">
          Your email client is opening
        </h3>
        <p className="mt-2 max-w-sm text-pretty text-muted">
          If nothing happened, email us directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            {site.email}
          </a>
          . We reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-muted hover:text-ink"
        >
          ← Back to the form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              Name
            </span>
            <input
              required
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder="Your name"
              className={fieldBase}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </span>
            <input
              required
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@company.com"
              className={fieldBase}
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              Project type
            </span>
            <select value={form.type} onChange={update("type")} className={cn(fieldBase, "appearance-none")}>
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              Budget
            </span>
            <select value={form.budget} onChange={update("budget")} className={cn(fieldBase, "appearance-none")}>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">
            What do you want to build?
          </span>
          <textarea
            required
            value={form.message}
            onChange={update("message")}
            rows={5}
            placeholder="A few sentences about your idea, timeline and goals…"
            className={cn(fieldBase, "resize-y")}
          />
        </label>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            We&apos;ll never share your details. Reply within one business day.
          </p>
          <Button type="submit" size="lg" withArrow className="w-full sm:w-auto">
            <Loader2 className="hidden" />
            Send enquiry
          </Button>
        </div>
      </div>
    </form>
  );
}
