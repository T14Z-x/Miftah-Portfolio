"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (payload: FormState) => {
    const next: Partial<FormState> = {};
    if (!payload.name.trim()) next.name = "Name is required.";
    if (!payload.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      next.email = "Enter a valid email.";
    }
    if (!payload.message.trim()) next.message = "Message is required.";
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-tr from-blue-900/10 via-slate-900/30 to-slate-950/80 blur-2xl" />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Build with NovaSphere"
            subtitle="Studios, builders, and communities are co-creating the next wave of play. Tell us what you want to launch and we'll help you ship it."
          />
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p>• Integration support for SDKs and data streams.</p>
            <p>• AI-driven squad design, rewards tuning, and realm hosting.</p>
            <p>• Early access to NSX token utilities and governance.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="glass relative space-y-5 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Name"
                id="name"
                type="text"
                value={form.name}
                error={errors.name}
                onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
              />
            </div>
            <Field
              label="Message"
              id="message"
              textarea
              value={form.message}
              error={errors.message}
              onChange={(value) => setForm((prev) => ({ ...prev, message: value }))}
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-300">
                {submitted ? (
                  <span className="text-cyan-200">
                    Message received — we&apos;ll reach out soon.
                  </span>
                ) : (
                  "We’ll respond within 48 hours."
                )}
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type?: string;
  textarea?: boolean;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function Field({
  label,
  id,
  type = "text",
  textarea,
  value,
  error,
  onChange,
}: FieldProps) {
  const baseClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-cyan-300/60 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/40";

  return (
    <label className="flex flex-col gap-2 text-sm text-slate-200" htmlFor={id}>
      {label}
      {textarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          required
          rows={4}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={baseClass}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={baseClass}
        />
      )}
      {error ? (
        <span id={`${id}-error`} className="text-xs text-rose-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}
