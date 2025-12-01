"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { href: "#about", label: "A propos" },
  { href: "#model", label: "Modele" },
  { href: "#tech", label: "Technologie" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-md shadow-black/5"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/barzah-logo.png"
            alt="Barzah Capital logo"
            width={160}
            height={48}
            priority
            className="h-10 w-auto drop-shadow-md"
          />
          <div className="leading-tight">
            <p className="font-semibold text-accent2">Barzah Capital</p>
            <p className="text-xs text-muted">Qatar | FinTech &amp; PropTech</p>
          </div>
        </div>
        <nav className="hidden items-center gap-4 text-sm font-semibold text-ink/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-orange-50 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-md shadow-black/10 transition hover:opacity-90"
        >
          Exprimer votre interet
        </a>
      </div>
    </motion.header>
  );
}
