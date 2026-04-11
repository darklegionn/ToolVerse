import { motion } from 'framer-motion';

const Header = ({ currentPage, onNavigate }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Explore', id: 'explore' },
    { name: 'About Us', id: 'about' }
  ];

  return (
    <header className="border-b border-white/15 bg-[#0A0A0A] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => onNavigate('home')}
          className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          TOOL VERSE
        </motion.button>

        {/* Navigation */}
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -2 }}
              onClick={() => onNavigate(item.id)}
              className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${
                currentPage === item.id ? 'text-[#FF3300]' : 'text-[#A3A3A3] hover:text-white'
              }`}
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;