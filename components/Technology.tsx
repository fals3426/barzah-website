"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { title: "1. Regulation-First Architecture", content: "Every component of the platform is designed in alignment with Qatar’s regulatory frameworks — ensuring compliant operations, investor protection, and long-term stability." },
  { title: "2. Shariah-Compliant Investment Engine", content: "Each property passes structured Shariah screening, SPV setup, and rental-based income validation to ensure every investment is ethically sound and fully compliant." },
  { title: "3. Tokenized Digital Ownership (No Crypto Exposure)", content: "Blockchain is used only where it adds real value — to secure ownership rights, automate payouts, and support future liquidity — without introducing crypto, volatility, or speculation." },
  { title: "4. Secure Qatar-Based Data Hosting", content: "All sensitive data and investment records are stored within Qatar-approved infrastructure, using industry-grade encryption, monitoring, and data residency controls." },
  { title: "5. API-Native & Modular Platform Design", content: "Our architecture is built for easy evolution — integrating seamlessly with banks, payment providers, eKYC services, custodians, and future secondary market partners." },
  { title: "6. Automated Payouts & Real-Time Reporting", content: "Investors receive rental distributions automatically, backed by transparent dashboards, audit-ready reports, and immediate alerts for all portfolio activity." },
  { title: "7. Institutional-Grade Security & Compliance", content: "We apply bank-level safeguards: strong identity verification, access controls, transaction monitoring, immutable audit logs, and policy-driven governance." },
  { title: "8. AI-Enhanced Risk & Operations", content: "AI supports due diligence, anomaly detection, investor risk scoring, and property performance analysis — improving accuracy, efficiency, and decision-making." },
  { title: "9. Radical Transparency by Design", content: "Every investment, every payout, every change in ownership is recorded, audit-ready, and viewable through digital dashboards — giving investors full visibility at all times." },
  { title: "10. Future-Ready Liquidity Layer", content: "Our structure supports scheduled liquidity windows today and is designed for regulated secondary-market trading tomorrow, once approved by Qatar’s regulators." },
];

export default function Technology() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="tech" className="bg-base">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white p-8 shadow-xl shadow-black/10"
        >
          <p className="text-xs text-muted">________________________________________</p>
          <p className="text-sm font-bold uppercase tracking-tight text-accent2">● OUR TECHNOLOGY</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-accent2 sm:text-4xl">Built for trust. Engineered for scale.</h2>
          <p className="text-muted">(Icons/boxes for each point and expand the box to show the details when the user clicks on it)</p>
          <div className="mt-6 space-y-3">
            {items.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md shadow-black/5"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-accent2"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <ChevronDownIcon className={`h-5 w-5 transition ${isOpen ? "rotate-180 text-accent" : "text-muted"}`} />
                  </button>
                  <div
                    className={`px-4 pb-4 text-accent2 transition-[max-height,opacity] duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
