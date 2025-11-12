'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { storyBeats } from '@/lib/story';
import { BeatNarration } from '@/components/BeatNarration';
import { ShadowStage } from '@/components/ShadowStage';
import { PulseOverlay } from '@/components/PulseOverlay';
import { FlickerBulb } from '@/components/FlickerBulb';
import { RoomFrame } from '@/components/RoomFrame';

export default function Page() {
  const [activeBeatIndex, setActiveBeatIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [flicker, setFlicker] = useState(true);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const intensity = useSpring(0.1, { stiffness: 70, damping: 16, mass: 1.2 });
  const [intensityValue, setIntensityValue] = useState(0.1);

  useEffect(() => {
    const unsubscribe = intensity.on('change', (value) => {
      setIntensityValue(value);
    });

    return () => {
      unsubscribe?.();
    };
  }, [intensity]);

  useEffect(() => {
    scheduleTimeline();

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const progress = activeBeatIndex / Math.max(1, storyBeats.length - 1);
    const newIntensity = 0.18 + progress * 0.75;
    intensity.set(newIntensity);
    setFlicker(progress < 0.8);
    setIsFinished(activeBeatIndex === storyBeats.length - 1);
  }, [activeBeatIndex, intensity]);

  const scheduleTimeline = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    let cumulative = 1200;
    storyBeats.forEach((beat, index) => {
      const timer = setTimeout(() => {
        setActiveBeatIndex(index);
      }, cumulative);
      timersRef.current.push(timer);
      cumulative += beat.delay;
    });
  };

  const handleReplay = () => {
    setActiveBeatIndex(0);
    setIsFinished(false);
    scheduleTimeline();
  };

  const activeBeat = useMemo(() => storyBeats[activeBeatIndex], [activeBeatIndex]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-abyss-900 px-4 py-10 text-neutral-100">
      <PulseOverlay intensity={intensityValue} />
      <div className="noise" />
      <RoomFrame flicker={flicker} />
      <FlickerBulb flicker={flicker} />

      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-10">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-red-300/70">horror vignette</p>
            <h1 className="font-spectral text-4xl sm:text-5xl lg:text-6xl">
              The Whisper in the Dark
            </h1>
            <motion.div
              className="h-0.5 w-20 bg-gradient-to-r from-red-500/80 to-transparent"
              layout
            />
          </header>

          <div className="space-y-16">
            {storyBeats.map((beat, index) => (
              <BeatNarration
                key={beat.id}
                beat={beat}
                index={index}
                isActive={index === activeBeatIndex}
                hasPassed={index < activeBeatIndex}
              />
            ))}
          </div>
        </section>

        <section className="relative flex h-[520px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-neutral-900 bg-abyss-800/60 shadow-veil">
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0.4, 0.55, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background:
                'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.04), transparent 60%), radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.08), transparent 70%)',
            }}
          />

          <ShadowStage intensity={intensityValue} />

          <AnimatePresence>
            {activeBeat.whisper && (
              <motion.p
                key={`whisper-${activeBeat.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 0.45, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-none absolute bottom-10 text-center font-spectral text-lg italic tracking-[0.4em] text-red-200/60"
              >
                {activeBeat.whisper}
              </motion.p>
            )}
          </AnimatePresence>
        </section>
      </div>

      <AnimatePresence>
        {isFinished && (
          <motion.button
            key="replay"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            onClick={handleReplay}
            className="relative z-20 mt-10 rounded-full border border-red-500/50 bg-black/30 px-8 py-3 text-sm uppercase tracking-[0.3em] text-red-200/80 backdrop-blur hover:bg-red-900/20 hover:text-red-100"
          >
            Replay the Echo
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-40"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(255, 0, 0, 0.04), transparent 70%), linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        }}
      />
    </main>
  );
}
