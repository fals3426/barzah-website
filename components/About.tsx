"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-base">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white p-8 shadow-xl shadow-black/10"
        >
          <p className="text-xs text-muted">________________________________________</p>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-tight text-accent2">ABOUT BARZAH</p>
              <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">
                Barzah Capital is a Qatar-based FinTech &amp; PropTech company (licensed under QFC) transforming how people invest in real estate.
              </h2>
              <p className="text-base text-muted">We combine:</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 text-ink shadow-md shadow-black/5">
              <div className="space-y-3">
                {[
                  "Shariah-compliant & regulated investment",
                  "Real-estate crowdfunding",
                  "Blockchain-based tokenization",
                  "Digital asset & secondary market infrastructure",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <p className="leading-relaxed text-accent2">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-accent2">
            to make property investment transparent, accessible, and liquid for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
