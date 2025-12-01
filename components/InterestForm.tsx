"use client";

import { motion } from "framer-motion";

export default function InterestForm() {
  return (
    <section id="contact" className="bg-base">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white p-8 shadow-xl shadow-black/10"
        >
          <p className="text-xs text-muted">________________________________________</p>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">JOIN THE INTEREST LIST</h2>
              <p className="text-accent2">Be the first invited onboard Qatar's next generation of real-estate investment.</p>
            </div>
            <form className="grid gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-accent2 placeholder:text-muted focus:border-accent focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-accent2 placeholder:text-muted focus:border-accent focus:outline-none"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-black/15 transition hover:opacity-90"
              >
                Get Early Access
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
