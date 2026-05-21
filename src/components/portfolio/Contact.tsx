import { Section } from "./Section";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      setError(r.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`Portfolio contact from ${r.data.name}`);
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:abishekabiharidad@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient-cyan">great</span>.</>}
      description="Open to full-time roles, freelance and collaborations on SaaS / API platforms."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <div className="space-y-3">
          <ContactLink
            href="mailto:abishekabiharidad@gmail.com"
            icon={Mail}
            label="Email"
            value="abishekabiharidad@gmail.com"
          />
          <ContactLink
            href="https://linkedin.com/in/abishek-m-h-283201200"
            icon={Linkedin}
            label="LinkedIn"
            value="abishek-m-h"
          />
          <ContactLink
            href="https://github.com/abhiraru"
            icon={Github}
            label="GitHub"
            value="abhiraru"
          />
        </div>

        <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-6 space-y-4">
          <Field
            label="Name"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            placeholder="Jane Doe"
          />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            placeholder="jane@company.com"
          />
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              value={form.message}
              maxLength={1000}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              placeholder="Tell me about your project…"
              className="mt-1 w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none resize-none"
            />
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          {sent && <p className="text-xs text-emerald-400">Opening your email client…</p>}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground glow-sm hover:glow transition"
          >
            Send message <Send className="size-4" />
          </motion.button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        maxLength={255}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
      />
    </div>
  );
}

function ContactLink({
  href, icon: Icon, label, value,
}: { href: string; icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/50 transition"
    >
      <div className="size-11 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary group-hover:bg-primary/20 transition">
        <Icon className="size-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
      <span className="text-muted-foreground group-hover:text-primary transition">→</span>
    </a>
  );
}
