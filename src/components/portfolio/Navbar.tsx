import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center font-mono font-bold text-primary-foreground text-sm">
                A
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent blur-md opacity-50 group-hover:opacity-80 transition" />
            </div>
            <span className="font-display font-semibold tracking-tight">
              Abishek<span className="text-primary">.</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition"
          >
            Let's talk
            <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" />
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
