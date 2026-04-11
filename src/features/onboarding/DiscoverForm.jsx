import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DOMAINS = [
  { value: "cyber-security", label: "Cyber Security" },
  { value: "web-development", label: "Web Development" },
  { value: "software-engineering", label: "Software Engineering" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "data-science", label: "Data Science" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "devops", label: "DevOps Engineering" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "networking", label: "Networking" }
];

const EDUCATION_OPTIONS = [
  { value: "BCA", label: "BCA (Bachelor of Computer Applications)" },
  { value: "MCA", label: "MCA (Master of Computer Applications)" },
  { value: "B.Tech", label: "B.Tech (Bachelor of Technology)" },
  { value: "M.Tech", label: "M.Tech (Master of Technology)" },
  { value: "BSc", label: "BSc Computer Science" },
  { value: "MSc", label: "MSc Computer Science" },
  { value: "Diploma", label: "Diploma in IT/CS" },
  { value: "Other", label: "Other" }
];

const LEVELS = [
  { value: "", label: "Select level (Optional)" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "expert", label: "Expert" }
];

const DiscoverForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    domain: '',
    level: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/users`, {
        name: formData.name,
        email: formData.email,
        education: formData.education,
        domain: formData.domain,
        level: formData.level || undefined
      });

      const levelParam = formData.level ? `?level=${formData.level}` : '';
      navigate(`/domain/${formData.domain}${levelParam}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "bg-transparent border border-white/15 text-white font-mono px-4 py-3 focus:outline-none focus:border-white focus:ring-0 rounded-none w-full";
  const labelClass = "block text-xs font-mono tracking-widest uppercase mb-2 text-white/70";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <div className="border-b border-white/10 sticky top-0 z-50 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            data-testid="discover-back-btn"
            onClick={() => navigate('/')}
            className="text-white hover:text-[#FF3300] transition-colors cursor-pointer"
          >
            <ArrowLeft size={24} />
          </button>
          <h1
            className="text-2xl sm:text-3xl font-black tracking-tighter uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Discover Your Domain
          </h1>
        </div>
      </div>

      <motion.div
        data-testid="discover-form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center px-6 py-12"
        style={{ minHeight: 'calc(100vh - 73px)' }}
      >
        <div className="max-w-lg w-full p-8 border border-white/15 bg-[#0A0A0A]">
          <div className="mb-8">
            <h2
              data-testid="form-title"
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Find Your Path
            </h2>
            <p className="text-sm text-[#A3A3A3] font-mono">
              Tell us about yourself and we'll guide you to the right career domain
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className={labelClass}>Full Name</label>
              <input
                data-testid="input-name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className={inputClass}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input
                data-testid="input-email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className={inputClass}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              />
            </div>

            <div>
              <label htmlFor="education" className={labelClass}>Education</label>
              <select
                data-testid="select-education"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className={`${inputClass} appearance-none cursor-pointer`}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                <option value="" className="bg-[#141414] text-white">Select your education</option>
                {EDUCATION_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-[#141414] text-white">{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="domain" className={labelClass}>Career Interest</label>
              <select
                data-testid="select-domain"
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                required
                className={`${inputClass} appearance-none cursor-pointer`}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                <option value="" className="bg-[#141414] text-white">Select your interest</option>
                {DOMAINS.map(d => (
                  <option key={d.value} value={d.value} className="bg-[#141414] text-white">{d.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="level" className={labelClass}>
                Your Level <span className="text-[#A3A3A3] normal-case tracking-normal">(optional)</span>
              </label>
              <select
                data-testid="select-level"
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {LEVELS.map(l => (
                  <option key={l.value} value={l.value} className="bg-[#141414] text-white">{l.label}</option>
                ))}
              </select>
            </div>

            <div className="pt-4">
              <button
                data-testid="discover-form-submit"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#FF3300] hover:text-white transition-colors duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Roadmap'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default DiscoverForm;