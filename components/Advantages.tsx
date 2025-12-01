"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const items = [
  "First-mover in Qatar’s regulated digital real estate sector",
  "100% Shariah-compliant structures",
  "Deep local market expertise",
  "Invest in more than buildings — access a wide range of real assets",
  "Seamless link between crowdfunding & blockchain tokenization",
  "Transparent digital reporting & yield visibility",
  "Institutional-grade governance and auditability",
  "Low entry amounts — start building wealth with the price of a dinner",
  "No down payment or financing required",
  "Future-ready secondary liquidity through tokenized ownership",
];

export default function Advantages() {
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
          <p className="text-xs text-muted">⸻</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">OUR STRATEGIC ADVANTAGES</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <div
                key={item}
                className="group flex items-start gap-4 rounded-3xl border border-gray-200 bg-white p-5 text-ink shadow-md shadow-black/5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-accent shadow-inner shadow-black/5">
                  <CheckCircleIcon className="h-6 w-6" />
                </span>
                <p className="leading-relaxed text-accent2">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
