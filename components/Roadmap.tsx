"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "Phase 1 (2026 Q2)",
    desc: "Regulatory approvals & QCB Sandbox testing.",
  },
  {
    title: "Phase 2 (2026 Q3)",
    desc: "Crowdfunding launch in Qatar + first tokenized deals.",
  },
  {
    title: "Phase 3 (2027 Q1)",
    desc: "Secondary market liquidity & cross-border expansion.",
  },
];

export default function Roadmap() {
  return (
    <section className="bg-base">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white p-8 shadow-xl shadow-black/10"
        >
          <p className="text-xs text-muted">________________________________________</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">ROADMAP</h2>
          <div className="mt-4 space-y-4">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className="flex items-start gap-3 rounded-3xl border border-gray-200 bg-white p-5 text-accent2 shadow-md shadow-black/5"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-semibold text-accent shadow-inner shadow-black/5">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-accent2">{phase.title}</p>
                  <p className="text-accent2/90">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
