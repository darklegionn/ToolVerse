import { useState } from 'react';
import IntroSequence from '../onboarding/IntroSequence';
import HomePage from './HomePage';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = () => {
  const [showIntro, setShowIntro] = useState(() => {
    const seen = sessionStorage.getItem('toolverse_intro_seen');
    return !seen;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('toolverse_intro_seen', 'true');
    setShowIntro(false);
  };

  return (
    <div data-testid="landing-page">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <IntroSequence onComplete={handleIntroComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HomePage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;