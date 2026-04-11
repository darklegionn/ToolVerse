import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DOMAINS = [
  { value: "cyber-security", label: "Cyber Security 🔒" },
  { value: "web-development", label: "Web Development 🌐" },
  { value: "software-engineering", label: "Software Engineering 💻" },
  { value: "ui-ux-design", label: "UI/UX Design 🎨" },
  { value: "data-science", label: "Data Science 📊" },
  { value: "mobile-development", label: "Mobile Development 📱" },
  { value: "devops", label: "DevOps Engineering ⚙️" },
  { value: "ai-ml", label: "AI & Machine Learning 🤖" },
  { value: "networking", label: "Networking 🌐" }
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

const UserForm = ({ onSubmit, onSkip }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    domain: ''
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
      console.log('Submitting to:', `${API}/users`);
      console.log('Form data:', formData);
      
      const response = await axios.post(`${API}/users`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Success:', response.data);
      onSubmit(formData.domain);
    } catch (error) {
      console.error('Error details:', error.response || error);
      
      let errorMessage = 'Failed to submit form. ';
      if (error.response) {
        errorMessage += `Server error: ${error.response.status}`;
      } else if (error.request) {
        errorMessage += 'Backend server is not responding. Please make sure the backend is running.';
      } else {
        errorMessage += error.message;
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      data-testid="user-form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: 'url(https://static.prod-images.emergentagent.com/jobs/2bf6fe71-9feb-487f-8962-2dcdaf8a267a/images/85caa7f3007a5109e90f9b2a95413544d695a6659cdc9060264a6c587872be37.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'screen',
        backgroundColor: '#0A0A0A',
        opacity: 0.95
      }}
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
            <label 
              htmlFor="name"
              className="block text-xs font-mono tracking-widest uppercase mb-2 text-white/70"
            >
              Full Name
            </label>
            <input
              data-testid="input-name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border border-white/15 text-white font-mono px-4 py-3 focus:outline-none focus:border-white focus:ring-0 rounded-none w-full"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            />
          </div>

          <div>
            <label 
              htmlFor="email"
              className="block text-xs font-mono tracking-widest uppercase mb-2 text-white/70"
            >
              Email Address
            </label>
            <input
              data-testid="input-email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border border-white/15 text-white font-mono px-4 py-3 focus:outline-none focus:border-white focus:ring-0 rounded-none w-full"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            />
          </div>

          <div>
            <label 
              htmlFor="education"
              className="block text-xs font-mono tracking-widest uppercase mb-2 text-white/70"
            >
              Education
            </label>
            <select
              data-testid="select-education"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="bg-transparent border border-white/15 text-white font-mono px-4 py-3 focus:outline-none focus:border-white focus:ring-0 rounded-none w-full appearance-none cursor-pointer"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <option value="" className="bg-[#141414] text-white">Select your education</option>
              {EDUCATION_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value} className="bg-[#141414] text-white">{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label 
              htmlFor="domain"
              className="block text-xs font-mono tracking-widest uppercase mb-2 text-white/70"
            >
              Career Interest
            </label>
            <select
              data-testid="select-domain"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
              className="bg-transparent border border-white/15 text-white font-mono px-4 py-3 focus:outline-none focus:border-white focus:ring-0 rounded-none w-full appearance-none cursor-pointer"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <option value="" className="bg-[#141414] text-white">Select your interest</option>
              {DOMAINS.map(domain => (
                <option key={domain.value} value={domain.value} className="bg-[#141414] text-white">{domain.label}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              data-testid="user-form-submit"
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-white text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#FF3300] hover:text-white transition-colors duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {isSubmitting ? 'Submitting...' : 'Get My Roadmap'}
            </button>
            <button
              data-testid="user-form-later"
              type="button"
              onClick={onSkip}
              className="flex-1 bg-transparent text-white font-mono text-sm underline underline-offset-4 px-4 py-4 hover:text-[#FF3300] transition-colors duration-300 rounded-none"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Skip for Now
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default UserForm;