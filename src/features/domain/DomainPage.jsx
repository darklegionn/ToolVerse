import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { domainData } from '../../data/domainData';
import axios from 'axios';
import { Send, BookOpen, Youtube, Wrench, FileText, MessageCircle, Home, ArrowLeft, Filter } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LEVEL_PHASES = {
  beginner: [0, 1],
  intermediate: [1, 2],
  expert: [2, 3]
};

const LEVEL_LABELS = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  expert: 'Expert'
};

const DomainPage = () => {
  const { domainKey } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const level = searchParams.get('level') || '';

  const [domain, setDomain] = useState(null);
  const [activeLevel, setActiveLevel] = useState(level);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}`);

  useEffect(() => {
    if (domainKey && domainData[domainKey]) {
      setDomain(domainData[domainKey]);
    }
  }, [domainKey]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMsg = inputMessage.trim();
    setInputMessage('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await axios.post(`${API}/chat`, {
        message: userMsg,
        domain: domain.name,
        session_id: sessionId
      });
      setChatMessages(prev => [...prev, { role: 'assistant', content: response.data.response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFilteredRoadmap = () => {
    if (!domain) return [];
    if (!activeLevel || !LEVEL_PHASES[activeLevel]) return domain.roadmap;
    const [start, end] = LEVEL_PHASES[activeLevel];
    return domain.roadmap.filter((_, idx) => idx >= start && idx <= end);
  };

  const getFilteredCourses = (type) => {
    if (!domain) return [];
    const courses = domain.courses[type];
    if (!activeLevel) return courses;
    if (activeLevel === 'beginner') return courses.slice(0, 2);
    if (activeLevel === 'intermediate') return courses.slice(0, 3);
    return courses;
  };

  const getFilteredVideos = () => {
    if (!domain) return [];
    if (!activeLevel) return domain.videos;
    if (activeLevel === 'beginner') return domain.videos.slice(0, 2);
    if (activeLevel === 'intermediate') return domain.videos.slice(0, 3);
    return domain.videos;
  };

  if (!domain) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Domain not found</div>
          <button onClick={() => navigate('/')} className="text-[#FF3300] hover:underline cursor-pointer font-mono">Go Home</button>
        </div>
      </div>
    );
  }

  const filteredRoadmap = getFilteredRoadmap();

  return (
    <div data-testid="domain-page" className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
      {/* Header */}
      <div className="border-b border-white/15 bg-[#0A0A0A] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              data-testid="back-button"
              onClick={() => navigate(-1)}
              className="text-white hover:text-[#FF3300] transition-colors cursor-pointer"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {domain.icon} {domain.name}
            </h1>
          </div>
          <button
            data-testid="home-button"
            onClick={() => navigate('/')}
            className="text-xs uppercase tracking-widest text-[#A3A3A3] hover:text-white cursor-pointer"
          >
            <Home size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-base text-[#A3A3A3] mb-6">{domain.description}</p>
        </motion.div>

        {/* Level Filter */}
        <motion.div
          data-testid="level-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter size={18} className="text-[#FF3300]" />
            <span className="text-xs uppercase tracking-widest text-[#A3A3A3]">Filter by Level</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              data-testid="filter-all"
              onClick={() => setActiveLevel('')}
              className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                !activeLevel
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-[#A3A3A3] border-white/15 hover:border-white/40'
              }`}
            >
              All Levels
            </button>
            {Object.entries(LEVEL_LABELS).map(([key, label]) => (
              <button
                key={key}
                data-testid={`filter-${key}`}
                onClick={() => setActiveLevel(key)}
                className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                  activeLevel === key
                    ? 'bg-[#FF3300] text-white border-[#FF3300]'
                    : 'bg-transparent text-[#A3A3A3] border-white/15 hover:border-white/40'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          {activeLevel && (
            <div className="mt-3 text-xs text-[#A3A3A3] font-mono">
              Showing content tailored for <span className="text-[#FF3300]">{LEVEL_LABELS[activeLevel]}</span> level
            </div>
          )}
        </motion.div>

        {/* Roadmap */}
        <motion.section
          data-testid="roadmap-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={24} className="text-[#FF3300]" />
            <h2 className="text-2xl font-bold uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Learning Roadmap
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredRoadmap.map((phase, idx) => (
              <div key={idx} className="border border-white/15 p-6 hover:border-white/30 transition-colors">
                <div className="text-xs uppercase tracking-widest text-[#FF3300] mb-2">{phase.phase}</div>
                <div className="text-sm text-[#A3A3A3] mb-4">{phase.duration}</div>
                <ul className="space-y-2">
                  {phase.topics.map((topic, i) => (
                    <li key={i} className="text-sm flex items-start">
                      <span className="text-[#FF3300] mr-2">&rarr;</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Courses */}
        <motion.section
          data-testid="courses-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={24} className="text-[#FF3300]" />
            <h2 className="text-2xl font-bold uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Recommended Courses
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-[#A3A3A3] mb-4">Free Courses</h3>
              <div className="space-y-3">
                {getFilteredCourses('free').map((course, idx) => (
                  <a
                    key={idx}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-white/15 p-4 hover:border-[#FF3300] transition-colors cursor-pointer"
                  >
                    <div className="text-sm font-bold mb-1">{course.title}</div>
                    <div className="text-xs text-[#A3A3A3]">{course.provider}</div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-[#A3A3A3] mb-4">Paid Courses</h3>
              <div className="space-y-3">
                {getFilteredCourses('paid').map((course, idx) => (
                  <div key={idx} className="border border-white/15 p-4 hover:border-[#FF3300] transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-sm font-bold">{course.title}</div>
                      <div className="text-sm text-[#FF3300]">{course.price}</div>
                    </div>
                    <div className="text-xs text-[#A3A3A3]">{course.platform} - {course.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* YouTube Videos */}
        <motion.section
          data-testid="videos-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Youtube size={24} className="text-[#FF3300]" />
            <h2 className="text-2xl font-bold uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              YouTube Videos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getFilteredVideos().map((video, idx) => (
              <div key={idx} className="border border-white/15 p-4 hover:border-[#FF3300] transition-colors">
                <div className="text-sm font-bold mb-1">{video.title}</div>
                <div className="text-xs text-[#A3A3A3]">{video.channel} - {video.views} views</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tools & Resources */}
        <motion.section
          data-testid="tools-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wrench size={24} className="text-[#FF3300]" />
                <h2 className="text-2xl font-bold uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Essential Tools
                </h2>
              </div>
              <div className="space-y-3">
                {domain.tools.map((tool, idx) => (
                  <div key={idx} className="border border-white/15 p-4 hover:border-[#FF3300] transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-sm font-bold">{tool.name}</div>
                      <div className="text-xs text-[#FF3300] uppercase">{tool.type}</div>
                    </div>
                    <div className="text-xs text-[#A3A3A3]">{tool.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText size={24} className="text-[#FF3300]" />
                <h2 className="text-2xl font-bold uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Resources
                </h2>
              </div>
              <div className="space-y-3">
                {domain.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-white/15 p-4 hover:border-[#FF3300] transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-sm font-bold">{resource.title}</div>
                      <div className="text-xs text-[#FF3300] uppercase">{resource.type}</div>
                    </div>
                    <div className="text-xs text-[#A3A3A3] underline">{resource.url}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* AI Chat Box */}
        <motion.section
          data-testid="chat-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle size={24} className="text-[#FF3300]" />
            <h2 className="text-2xl font-bold uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Ask AI Mentor
            </h2>
          </div>
          <div className="border border-white/15 p-6">
            <div data-testid="chat-messages" className="h-96 overflow-y-auto mb-4 space-y-4">
              {chatMessages.length === 0 && (
                <div className="text-center text-[#A3A3A3] mt-20">
                  Ask me anything about {domain.name}!
                </div>
              )}
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 border ${msg.role === 'user' ? 'bg-[#FF3300] border-[#FF3300] text-white' : 'bg-transparent border-white/15'}`}>
                    <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 border border-white/15">
                    <div className="text-sm text-[#A3A3A3]">Thinking...</div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <input
                data-testid="chat-input"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about career paths, tools, or learning tips..."
                className="flex-1 bg-transparent border border-white/15 text-white font-mono px-4 py-3 focus:outline-none focus:border-white focus:ring-0 rounded-none"
                disabled={isLoading}
              />
              <button
                data-testid="chat-send-button"
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-white text-black px-6 py-3 hover:bg-[#FF3300] hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DomainPage;