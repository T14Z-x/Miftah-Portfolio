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
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [botField, setBotField] = useState("");

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    setStatus(null);

    if (botField.trim()) return;

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setIsSending(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          const reason = data?.error || "Unable to send message right now.";
          if (reason.toLowerCase().includes("not configured")) {
            const subject = encodeURIComponent(
              `Portfolio inquiry from ${form.name || "website visitor"}`
            );
            const body = encodeURIComponent(
              `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
            );
            window.location.href = `mailto:ashfiqun1727@gmail.com?subject=${subject}&body=${body}`;
            setStatus("Email service isn’t configured here—opening your email app instead.");
            return;
          }
          throw new Error(reason);
        }

        setSubmitted(true);
        setStatus("Thanks! Your message was sent.");
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        setStatus("We couldn't send your message. Please email ashfiqun1727@gmail.com directly.");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-tr from-blue-900/10 via-slate-900/30 to-slate-950/80 blur-2xl" />
      <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Work with Ashfiqun Ahmed Miftah"
            subtitle="Need a production-grade React/Next.js front end, a React Native prototype, or a dashboard stakeholders trust? Share your goals—I'll pair data, design, and engineering to ship something clear, measurable, and polished."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoCard
              title="Direct email"
              value="ashfiqun1727@gmail.com"
              href="mailto:ashfiqun1727@gmail.com"
            />
            <InfoCard
              title="LinkedIn"
              value="Connect on LinkedIn"
              href="https://www.linkedin.com/in/ashfiqun-ahmed-b4b405204/"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
            {[
              "Dashboards & storytelling",
              "UX audits & prototypes",
              "Research & usability",
              "Motion for clarity",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-900/70 p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-12 top-6 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
              <div className="absolute bottom-0 right-[-10%] h-48 w-48 rounded-full bg-fuchsia-500/14 blur-[120px]" />
            </div>
            <div className="relative space-y-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-cyan-100">
                  Send a message
                </span>
                <span className="text-slate-400">All fields required</span>
              </div>

              <input
                type="text"
                name="company"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

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
                      {status || "Opening your email client now."}
                    </span>
                  ) : (
                    "Expect a reply within 48 hours."
                  )}
                </div>
                <Button type="submit" className="w-full sm:w-auto" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </div>
              {status && !submitted ? (
                <p className="text-sm text-amber-200">{status}</p>
              ) : null}
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

type InfoCardProps = {
  title: string;
  value: string;
  href?: string;
};

function InfoCard({ title, value, href }: InfoCardProps) {
  const content = (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:border-white/30 hover:bg-white/10">
      <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
        {title}
      </p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
