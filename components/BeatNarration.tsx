'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { StoryBeat } from '@/lib/story';
import { useMemo } from 'react';

interface BeatNarrationProps {
  beat: StoryBeat;
  isActive: boolean;
  hasPassed: boolean;
  index: number;
}

export function BeatNarration({ beat, isActive, hasPassed, index }: BeatNarrationProps) {
  const words = useMemo(() => beat.narration.split(' '), [beat.narration]);

  return (
    <div className="relative">
      <motion.h2
        layout
        className="text-xs tracking-[0.5em] uppercase text-red-400/70 mb-4"
        animate={{ opacity: isActive ? 1 : hasPassed ? 0.4 : 0.1 }}
        transition={{ duration: 0.6, delay: 0.05 * index }}
      >
        {beat.subtitle}
      </motion.h2>

      <motion.p
        layout
        className="font-spectral text-xl sm:text-2xl leading-relaxed text-neutral-100/90"
        animate={{ opacity: isActive ? 1 : hasPassed ? 0.3 : 0 }}
        transition={{ duration: 0.6, delay: 0.05 * index }}
      >
        {words.map((word, wIndex) => (
          <motion.span
            key={`${beat.id}-${word}-${wIndex}`}
            className="inline-block mr-1"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: isActive ? 1 : hasPassed ? 0.3 : 0, y: isActive ? 0 : 6 }}
            transition={{
              delay: index * 0.2 + wIndex * 0.04,
              duration: 0.4,
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      <AnimatePresence>
        {isActive && beat.whisper && (
          <motion.span
            key="whisper"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.6, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-10 left-6 font-spectral text-base italic text-red-200/40"
          >
            {beat.whisper}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
