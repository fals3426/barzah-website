"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="bg-base">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-black/10">
            <p className="text-xs text-muted">________________________________________</p>
            <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-md shadow-black/5">
              <p className="text-sm font-bold uppercase tracking-tight text-accent2">OUR PURPOSE</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-accent2">Our Vision</h3>
              <p className="mt-2 text-accent2">
                To lead the shift toward Shariah-compliant digital real-estate investment in Qatar and the region through innovation, trust, and accessibility.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-black/10">
            <p className="text-xs text-muted">________________________________________</p>
            <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-md shadow-black/5">
              <p className="text-sm font-bold uppercase tracking-tight text-accent2">OUR PURPOSE</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-accent2">Our Mission</h3>
              <p className="mt-2 text-accent2">
                To empower individuals and investors with seamless access to professionally-vetted real-estate opportunities through crowdfunding, tokenization, and future secondary trading - always under regulatory oversight.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
