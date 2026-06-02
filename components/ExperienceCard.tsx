'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ExperienceCard({ icon, title, description, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
    >
      {/* Hover accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-text mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </motion.article>
  );
}
