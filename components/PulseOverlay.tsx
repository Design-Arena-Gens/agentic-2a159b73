'use client';

import { motion } from 'framer-motion';

export function PulseOverlay({ intensity }: { intensity: number }) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      animate={{ backgroundColor: `rgba(140, 0, 20, ${0.06 + intensity * 0.08})` }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0, 0.06 + intensity * 0.12, 0],
          scale: [1, 1.01 + intensity * 0.05, 1],
        }}
        transition={{ duration: 1.6, repeat: Infinity }}
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(255, 30, 30, 0.08), rgba(0, 0, 0, 0.85))',
        }}
      />
    </motion.div>
  );
}
