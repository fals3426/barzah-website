"use client";

import { motion } from "framer-motion";

const rows = [
  {
    title: "Retail Investors",
    desc: "Start building your property portfolio with small amounts.",
  },
  {
    title: "High-Net-Worth Individuals",
    desc: "Access digital asset-backed real estate structures.",
  },
  {
    title: "Institutional Investors",
    desc: "Digitized SPVs, structured Shariah-compliant offerings.",
  },
  {
    title: "Developers",
    desc: "Fund projects faster. Reduce capital constraints.",
  },
  {
    title: "Property Owners",
    desc: "Sell property fractions instead of the entire asset.",
  },
  {
    title: "Future cross-border expansion includes MENA region & high growth markets.",
    desc: "Focus on future cross-border expansion in MENA and other high growth markets.",
  },
];

export default function WhoWeServe() {
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
          <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">WHO WE SERVE</h2>
          <div className="mt-6 space-y-4">
            {rows.map((row, idx) => (
              <div key={row.title} className="grid gap-4 md:grid-cols-[1fr_1fr]">
                <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 text-accent2 shadow-md shadow-black/5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed text-accent2">{row.title}</p>
                </div>
                <div className="flex items-center text-accent2">
                  <p className="leading-relaxed">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
