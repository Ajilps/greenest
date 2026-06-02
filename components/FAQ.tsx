'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title = 'Frequently Asked Questions', subtitle }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" aria-label="FAQ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">FAQ</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text">{title}</h2>
          {subtitle && <p className="mt-4 text-gray-500 text-base">{subtitle}</p>}
        </motion.div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
                id={`faq-btn-${i}`}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="font-semibold text-text text-sm pr-4">{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-primary transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
