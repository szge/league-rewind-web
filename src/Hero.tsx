import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Scale up the text to create zoom effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  
  // Fade out the hero section
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  return (
    <section ref={ref} className="h-[100vh] relative">
      <motion.div 
        className="sticky top-0 h-screen w-full bg-blue-600 flex items-center justify-center overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          style={{ scale }}
          className="relative"
        >
          <h1 
            className="text-[20vw] font-bold tracking-tight"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px white',
              textStroke: '2px white',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            REWIND
          </h1>
        </motion.div>
        {/* Optional: Add a subtle hint to scroll */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;