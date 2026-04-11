import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const UnderDevelopment = () => {
  return (
    <motion.div
      data-testid="under-development-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{
        backgroundImage: 'url(https://static.prod-images.emergentagent.com/jobs/2bf6fe71-9feb-487f-8962-2dcdaf8a267a/images/85caa7f3007a5109e90f9b2a95413544d695a6659cdc9060264a6c587872be37.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0A0A0A',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-[#0A0A0A]/90"></div>
      
      <div className="relative z-10 w-full">
        <Marquee speed={80} gradient={false} className="py-8">
          <div 
            className="text-[12vw] font-black uppercase tracking-tighter px-12 text-transparent"
            style={{
              fontFamily: "'Outfit', sans-serif",
              WebkitTextStroke: '2px #FFFFFF',
              textStroke: '2px #FFFFFF'
            }}
          >
            UNDER DEVELOPMENT
          </div>
        </Marquee>

        <Marquee speed={100} gradient={false} direction="right" className="py-8">
          <div 
            className="text-[12vw] font-black uppercase tracking-tighter px-12 text-transparent"
            style={{
              fontFamily: "'Outfit', sans-serif",
              WebkitTextStroke: '2px #FF3300',
              textStroke: '2px #FF3300'
            }}
          >
            COMING SOON
          </div>
        </Marquee>

        <Marquee speed={90} gradient={false} className="py-8">
          <div 
            className="text-[12vw] font-black uppercase tracking-tighter px-12 text-transparent"
            style={{
              fontFamily: "'Outfit', sans-serif",
              WebkitTextStroke: '2px #FFFFFF',
              textStroke: '2px #FFFFFF'
            }}
          >
            TOOL VERSE
          </div>
        </Marquee>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 mt-12 text-center px-6"
      >
        <p className="text-base sm:text-lg text-[#A3A3A3] font-mono max-w-2xl">
          We're building something incredible. Stay tuned.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default UnderDevelopment;