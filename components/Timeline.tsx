'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Loader, Clock } from 'lucide-react';

const phases = [
  {
    label: 'Land Acquired',
    status: 'done' as const,
    description: "Prime land secured in Kanthalloor, Idukki District — the heart of Kerala's high ranges.",
  },
  {
    label: 'Planning & Vision',
    status: 'active' as const,
    description: 'Architectural planning, sustainability assessment, and eco-design blueprint underway.',
  },
  {
    label: 'Design & Approvals',
    status: 'upcoming' as const,
    description: 'Interior landscape design, local regulatory approvals, and material sourcing.',
  },
  {
    label: 'Construction',
    status: 'active' as const,
    description: 'Building eco-friendly structures with locally sourced materials and minimal footprint.',
  },
  {
    label: 'Soft Launch',
    status: 'upcoming' as const,
    description: 'Doors open exclusively to waitlist members before the official public launch.',
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-[#F7F6F2]" aria-label="Project progress timeline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">Progress</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text">Project Milestones</h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            greenest is actively progressing. Here&rsquo;s where we stand today.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-secondary to-gray-200" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-6 pl-16"
              >
                {/* Icon bubble */}
                <div
                  className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md z-10 ${
                    phase.status === 'done'
                      ? 'bg-primary'
                      : phase.status === 'active'
                      ? 'bg-secondary'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  {phase.status === 'done' && <CheckCircle size={20} className="text-white" />}
                  {phase.status === 'active' && <Loader size={20} className="text-white animate-spin" />}
                  {phase.status === 'upcoming' && <Clock size={20} className="text-gray-400" />}
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="font-heading text-xl font-bold text-text">{phase.label}</p>
                    {phase.status === 'active' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-secondary/15 text-secondary text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        Current Phase
                      </span>
                    )}
                    {phase.status === 'done' && (
                      <span className="px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
