"use client";

import { motion } from "framer-motion";

export default function WhyBarzah() {
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
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-tight text-accent2">⭐ WHY BARZAH?</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">
              Barzah is built at the intersection of real estate, Shariah-compliant finance, and digital innovation — designed to open investment opportunities that were once accessible only to large investors and institutions.
            </h2>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-5 text-accent2 shadow-md shadow-black/5">
              <h3 className="font-semibold text-accent2">Deep Knowledge of Qatar’s Real Estate Sector</h3>
              <p className="mt-2 text-accent2">
                Born from first-hand experience in Qatar’s property markets, Barzah understands the needs of developers, landlords, brokers, and investors. Our platform is designed around the real operational challenges of real estate — not theory.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-5 text-accent2 shadow-md shadow-black/5">
              <h3 className="font-semibold text-accent2">A Vision Beyond Traditional Real Estate</h3>
              <p className="mt-2 text-accent2">
                Barzah enables investment not only into apartments and commercial units, but also into parking assets, warehouses, logistics hubs, hospitality units, industrial facilities, and future regenerative developments.
                We are creating access to a broader universe of income-generating real assets.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-5 text-accent2 shadow-md shadow-black/5">
              <h3 className="font-semibold text-accent2">Investment + Management = A Full Real Estate Ecosystem</h3>
              <p className="mt-2 text-accent2">
                Unlike simple crowdfunding platforms, Barzah is built for the full lifecycle of an asset:
                regulated SPV formation
                automated rent collection & distribution
                tokenized beneficial ownership
                reporting & yield dashboards
                future liquidity pathways
                property and tenant management
              </p>
              <p className="mt-2 text-accent2">
                Investors don’t just “fund” properties — they own digital, compliant, income-producing assets supported by institutional-grade processes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
