'use client';

import { motion } from 'framer-motion';

export function RoomFrame({ flicker }: { flicker: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-6 border border-neutral-800/60"
        animate={{
          opacity: flicker ? [0.2, 0.8, 0.3] : 0.35,
          filter: flicker ? ['drop-shadow(0 0 20px rgba(255,0,0,0.2))', 'none'] : 'none',
        }}
        transition={{
          duration: flicker ? 0.3 : 5,
          repeat: flicker ? Infinity : undefined,
          repeatType: 'reverse',
        }}
      />

      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
        <div className="absolute left-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-red-900/50 to-transparent" />
      </div>
    </div>
  );
}
