"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-ink">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 text-sm text-ink"
        >
          <p className="text-xs text-muted">________________________________________</p>
          <p>Barzah Capital LLC</p>
          <p>Qatar Financial Centre (QFC)</p>
          <p>Doha, State of Qatar</p>
          <p>Email: info@barzah.co</p>
          <p>Website: www.barzah.qa</p>
          <p>Barzah is currently under regulatory evaluation. No investment services are provided at this stage.</p>
        </motion.div>
      </div>
    </footer>
  );
}
