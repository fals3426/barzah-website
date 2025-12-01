"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function Models() {
  return (
    <section id="model" className="bg-base">
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
            <p className="text-sm font-bold uppercase tracking-tight text-accent2">THE BARZAH MODEL - INVEST TWO WAYS</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">THE BARZAH MODEL - INVEST TWO WAYS</h2>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-black/10 transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-accent">
                <SparklesIcon className="h-4 w-4" /> 1 - Barzah Share
              </div>
              <h3 className="font-display text-2xl font-semibold text-accent2">Real Estate Crowdfunding (Primary Market)</h3>
              <p className="mt-2 text-accent2">
                Invest in professionally selected real-estate projects with low minimum amounts, backed by SPVs and full due diligence.
              </p>
              <div className="mt-3 space-y-1 text-accent2">
                <p>No down payment. No bank loans. No installments.</p>
                <p className="font-semibold">Perfect for:</p>
                <p>- Retail investors starting their property portfolio</p>
                <p>- Families diversifying savings</p>
                <p>- Young professionals looking for stable, Shariah-compliant returns</p>
              </div>
              <div className="mt-3 space-y-1 rounded-2xl border border-gray-200 bg-white p-4 text-accent2 shadow-inner shadow-black/5">
                <p className="font-semibold">Key advantages:</p>
                <p>- Fractional investment in real-estate SPVs</p>
                <p>- Potential rental income</p>
                <p>- Potential capital appreciation</p>
                <p>- Fully digital onboarding</p>
                <p>- Transparent investor dashboard</p>
                <p>- Same protections as institutional investors</p>
              </div>
            </div>
            <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-black/10 transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-accent2">
                <SparklesIcon className="h-4 w-4" /> 2 - Barzah Token
              </div>
              <h3 className="font-display text-2xl font-semibold text-accent2">Blockchain-Based Real Estate Tokenization (Primary Market)</h3>
              <p className="mt-2 text-accent2">
                Properties can be converted into digital investment tokens that represent fractional ownership in Shariah-compliant SPVs.
              </p>
              <div className="mt-3 space-y-1 text-accent2">
                <p className="font-semibold">Ideal for:</p>
                <p>- Developers seeking alternative fundraising</p>
                <p>- Property owners wanting to sell fractions instead of the entire property</p>
                <p>- Investors looking for digital ownership and future liquidity</p>
              </div>
              <div className="mt-3 space-y-1 rounded-2xl border border-gray-200 bg-white p-4 text-accent2 shadow-inner shadow-black/5">
                <p className="font-semibold">Key advantages:</p>
                <p>- Tokenized ownership recorded on blockchain</p>
                <p>- 24/7 verifiable ownership</p>
                <p>- Lower entry barrier for global investors</p>
                <p>- Future-ready for 24/7 secondary trading once permitted</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
