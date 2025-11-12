'use client';

import { motion } from 'framer-motion';

export function FlickerBulb({ flicker }: { flicker: boolean }) {
  return (
    <div className="absolute inset-x-0 top-5 flex justify-center pointer-events-none">
      <motion.div
        className="relative h-24 w-24"
        animate={{
          opacity: flicker ? [0.1, 1, 0.2, 1, 0.5] : 0.8,
          scale: flicker ? [0.95, 1.1, 0.9, 1.05, 1] : 1,
        }}
        transition={{
          duration: flicker ? 1 : 2.5,
          repeat: flicker ? Infinity : undefined,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-0 rounded-full bg-yellow-200/90 blur-2xl" />
        <div className="absolute inset-[30%] rounded-full bg-amber-100/80 blur-lg" />
        <div className="absolute inset-[45%] rounded-full bg-amber-200/60" />
      </motion.div>
    </div>
  );
}
