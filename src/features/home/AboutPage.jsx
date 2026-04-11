import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Mail } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div data-testid="about-page" className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <div className="border-b border-white/10 sticky top-0 z-50 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              data-testid="about-back-btn"
              onClick={() => navigate('/')}
              className="text-white hover:text-[#FF3300] transition-colors cursor-pointer"
            >
              <ArrowLeft size={24} />
            </button>
            <h1
              className="text-2xl sm:text-3xl font-black tracking-tighter uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-black tracking-tighter uppercase mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            TOOL <span className="text-[#FF3300]">VERSE</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-mono leading-relaxed mb-6">
            TOOL VERSE is a platform designed to guide students from confusion to clarity in their tech career journey. We provide curated roadmaps, handpicked courses, essential tools, and an AI-powered mentor to help you navigate through various technology domains.
          </p>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-mono leading-relaxed">
            Whether you're interested in Cyber Security, Web Development, Data Science, or any other tech field — we've got a clear path mapped out for you with resources tailored to your experience level.
          </p>
        </motion.div>

        {/* Creator Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3
            className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Created By
          </h3>
          <div className="border border-white/15 p-8">
            <div className="text-lg font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Shenawaz Hussain
            </div>
            <p className="text-sm text-[#A3A3A3] font-mono mb-6">
              Passionate about helping students find their path in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                data-testid="telegram-link"
                href="https://t.me/Tool_verse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/15 px-6 py-3 hover:border-[#0088cc] hover:text-[#0088cc] transition-all duration-300 cursor-pointer group"
              >
                <Send size={18} className="group-hover:text-[#0088cc]" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#A3A3A3] group-hover:text-[#0088cc]/70">Telegram</div>
                  <div className="text-sm font-mono">@Tool_verse</div>
                </div>
              </a>

              <a
                data-testid="email-link"
                href="mailto:skshahnawazhussain348@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/15 px-6 py-3 hover:border-[#FF3300] hover:text-[#FF3300] transition-all duration-300 cursor-pointer group"
              >
                <Mail size={18} className="group-hover:text-[#FF3300]" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#A3A3A3] group-hover:text-[#FF3300]/70">Email</div>
                  <div className="text-sm font-mono">skshahnawazhussain348@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3
            className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Our Mission
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Guide", desc: "Clear roadmaps for every tech domain" },
              { title: "Curate", desc: "Best courses, tools, and resources" },
              { title: "Mentor", desc: "AI-powered career guidance" },
            ].map((item, i) => (
              <div key={i} className="border border-white/15 p-6 hover:border-[#FF3300]/50 transition-colors">
                <div className="text-lg font-bold mb-2 text-[#FF3300]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.title}
                </div>
                <div className="text-sm text-[#A3A3A3] font-mono">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;