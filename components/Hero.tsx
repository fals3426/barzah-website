"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-accent2 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-16 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">HERO SECTION</p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Invest in Real Estate the Smart, Simple &amp; Shariah-Compliant Way
          </h1>
          <p className="text-lg text-white/80">
            Fractional property ownership with no down payment, no installments, and no bank financing — starting from the
            price of a dinner.
          </p>
          <p className="text-lg text-white/80">
            Building the future of real-estate investing in Qatar — accessible, transparent, and powered by next-generation
            digital finance.
          </p>
          <div className="space-y-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white shadow-lg shadow-black/20">
            <p>Note: Barzah Capital is currently completing regulatory approvals.</p>
            <p>Our platform is not yet operational, but we are preparing to launch soon.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-black/20 transition hover:opacity-90"
            >
              Express Your Interest
            </a>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur">
              CTA Button: Express Your Interest
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1"
        >
          <div className="relative rounded-[24px] border border-white/20 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur">
            <div className="absolute inset-x-8 top-0 h-20 rounded-b-full bg-gradient-to-b from-white/20 to-transparent blur-2xl" />
            <div className="relative grid gap-4">
              <div className="rounded-[16px] border border-white/25 bg-white/10 p-4 shadow-md shadow-black/10">
                <div className="flex items-center justify-between text-sm text-white">
                  <span>Portfolio View</span>
                  <span className="rounded-full bg-accent/20 px-2 py-1 text-xs font-semibold text-white">Live</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm text-white">
                  <div>
                    <p className="text-white/70">Min Ticket</p>
                    <p className="font-semibold text-white">QAR 500</p>
                  </div>
                  <div>
                    <p className="text-white/70">SPV</p>
                    <p className="font-semibold text-white">Regulated</p>
                  </div>
                  <div>
                    <p className="text-white/70">Liquidity</p>
                    <p className="font-semibold text-white">Future-ready</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded-full bg-white/20">
                    <div className="h-full w-[78%] rounded-full bg-white" />
                  </div>
                  <div className="h-2 rounded-full bg-white/20">
                    <div className="h-full w-[62%] rounded-full bg-white/80" />
                  </div>
                  <div className="h-2 rounded-full bg-white/20">
                    <div className="h-full w-[88%] rounded-full bg-white/70" />
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] border border-white/25 bg-white/10 p-4 shadow-md shadow-black/10">
                <div className="flex items-center justify-between text-sm text-white">
                  <span>Regulated SPVs</span>
                  <span className="text-white font-semibold">Shariah-Compliant</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                    <p className="text-white/70">Digital onboarding</p>
                    <p className="font-semibold text-white">Fully digital</p>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                    <p className="text-white/70">Dashboard</p>
                    <p className="font-semibold text-white">Transparent</p>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                    <p className="text-white/70">Tokenization</p>
                    <p className="font-semibold text-white">Ready</p>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                    <p className="text-white/70">Protections</p>
                    <p className="font-semibold text-white">Institutional grade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
