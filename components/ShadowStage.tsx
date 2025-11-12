'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function ShadowStage({ intensity }: { intensity: number }) {
  const tendrils = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, index) => ({
        id: `tendril-${index}`,
        rotate: (index / 6) * 360,
      })),
    []
  );

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(120,0,40,0.25) 0%, rgba(0,0,0,0.85) 60%)' }}
        animate={{ scale: 1 + intensity * 0.2, opacity: 0.8 + intensity * 0.15 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {tendrils.map((tendril, idx) => (
        <motion.div
          key={tendril.id}
          className="absolute h-40 w-40 rounded-full bg-gradient-to-br from-red-900/30 via-black to-black"
          style={{
            filter: 'blur(20px)',
          }}
          animate={{
            rotate: tendril.rotate + intensity * 15,
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.5, 0.3],
          }}
          transition={{
            duration: 8 + idx * 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="relative h-64 w-64 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.02), transparent 70%), radial-gradient(ellipse at center, rgba(255,20,20,0.08), rgba(0,0,0,0.9) 60%)',
          boxShadow: 'inset 0 0 140px 20px rgba(0,0,0,0.95)',
        }}
        animate={{
          scale: 0.92 + intensity * 0.25,
          opacity: 0.9,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      >
        <motion.div
          className="absolute inset-6 rounded-full bg-black/80"
          animate={{
            scale: [0.95, 1.08, 0.95],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute left-1/2 top-1/3 h-16 w-16 -translate-x-1/2 rounded-full bg-black/80"
          animate={{
            y: [0, 6, -4, 0],
            scale: [1, 0.96, 1.02, 1],
            filter: ['blur(14px)', 'blur(8px)', 'blur(16px)'],
          }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute inset-x-20 bottom-8 h-24 rounded-full bg-red-900/20"
          animate={{
            scaleX: [0.85, 1.1, 0.9],
            opacity: [0.4, 0.7, 0.5],
          }}
          transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
