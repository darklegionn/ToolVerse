import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Compass, Users, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div data-testid="home-page" className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1
            data-testid="home-logo"
            className="text-2xl sm:text-3xl font-black tracking-tighter uppercase text-white cursor-pointer"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            onClick={() => navigate('/')}
          >
            TOOL VERSE
          </h1>
          <nav className="flex items-center gap-6">
            <button
              data-testid="nav-about"
              onClick={() => navigate('/about')}
              className="text-xs uppercase tracking-widest text-[#A3A3A3] hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              About Us
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6" style={{ minHeight: 'calc(100vh - 73px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#A3A3A3] mb-6"
          >
            Your Career Starts Here
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95] mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            From Confusion
            <br />
            <span className="text-[#FF3300]">To Clarity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm sm:text-base text-[#A3A3A3] font-mono max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Discover your ideal tech career domain with curated roadmaps, courses, tools, and an AI mentor to guide you every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              data-testid="discover-domain-btn"
              onClick={() => navigate('/discover')}
              className="group flex items-center gap-3 bg-white text-black font-bold uppercase tracking-widest px-10 py-4 hover:bg-[#FF3300] hover:text-white transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Compass size={20} />
              Let's Discover My Domain
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              data-testid="about-us-btn"
              onClick={() => navigate('/about')}
              className="flex items-center gap-2 bg-transparent border border-white/20 text-white font-mono text-sm px-8 py-4 hover:border-white/50 hover:text-[#FF3300] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <Users size={18} />
              About Us
            </button>
          </motion.div>
        </motion.div>

        {/* Domain preview cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl w-full"
        >
          {[
            { icon: "\u{1F512}", label: "Cyber Security" },
            { icon: "\u{1F310}", label: "Web Dev" },
            { icon: "\u{1F4BB}", label: "Software Eng" },
            { icon: "\u{1F3A8}", label: "UI/UX" },
            { icon: "\u{1F4CA}", label: "Data Science" },
          ].map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="border border-white/10 p-3 text-center hover:border-[#FF3300]/50 transition-colors"
            >
              <div className="text-xl mb-1">{d.icon}</div>
              <div className="text-[10px] uppercase tracking-wider text-[#A3A3A3]">{d.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;