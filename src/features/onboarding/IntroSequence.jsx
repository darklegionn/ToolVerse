import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const IntroSequence = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [typedText, setTypedText] = useState('');
  const quote = "A platform to guide students from confusion to clarity.";

  const handleComplete = useCallback(() => {
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase < 3) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= quote.length) {
        setTypedText(quote.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setPhase(4), 800);
        setTimeout(() => setPhase(5), 1300);
        setTimeout(() => handleComplete(), 1500);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [phase, handleComplete]);

  return (
    <motion.div
      data-testid="intro-sequence"
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] z-50 overflow-hidden"
      animate={{ opacity: phase === 5 ? 0 : 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,51,0,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="text-center px-6 relative z-10">
        <motion.div
          data-testid="welcome-text"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm sm:text-base font-medium tracking-[0.25em] uppercase text-[#A3A3A3] mb-3"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Welcome to
        </motion.div>

        <motion.h1
          data-testid="toolverse-title"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{
            opacity: phase >= 2 ? 1 : 0,
            scale: phase >= 2 ? 1 : 0.9,
            y: phase >= 2 ? 0 : 20
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl lg:text-[9vw] font-black tracking-tighter uppercase leading-none text-white mb-6"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          TOOL{' '}
          <motion.span
            animate={{ color: phase >= 2 ? '#FF3300' : '#FFFFFF' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            VERSE
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase >= 3 ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-24 h-[2px] bg-[#FF3300] mx-auto mb-6 origin-center"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 3 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-[28px]"
        >
          <p
            data-testid="typing-quote"
            className="text-sm sm:text-base text-[#A3A3A3] font-mono max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="text-[#FF3300] ml-[1px]"
            >
              |
            </motion.span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroSequence;