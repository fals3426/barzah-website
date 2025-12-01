"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Create your account",
    desc: "Digital onboarding with identity verification.",
  },
  {
    title: "Browse opportunities",
    desc: "Crowdfunding deals or tokenized assets.",
  },
  {
    title: "Invest from QAR 500",
    desc: "No down payment. No installments.",
  },
  {
    title: "Track your portfolio",
    desc: "View yields, statements, payouts.",
  },
  {
    title: "Enjoy your returns",
    desc: "Potential monthly rental income & capital gains (based on SPV performance).",
  },
  {
    title: "Future liquidity",
    desc: "Structured exit windows, or secondary market trading (subject to regulatory approval).",
  },
];

export default function HowItWorks() {
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
          <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">HOW IT WORKS (Simple Flow)</h2>
          <div className="mt-6 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="flex items-start gap-4 rounded-3xl border border-gray-200 bg-white p-5 text-accent2 shadow-md shadow-black/5"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-sm font-semibold text-white shadow-inner shadow-black/10">
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <p className="font-semibold text-accent2">{step.title}</p>
                  <p className="text-accent2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
