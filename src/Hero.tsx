import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"]
  });

  const zoom = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 50]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 1, 0]
  );

  return (
    <>
      <div ref={wrapperRef} className="h-[300vh]" />
      <motion.div
        style={{
          opacity,
          backgroundImage: "url('https://raw.communitydragon.org/15.19/plugins/rcp-fe-lol-static-assets/global/default/magic-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden pointer-events-none z-50"
      >
        <motion.div
          style={{ scale: zoom }}
          className="relative w-full px-4"
        >
          <h1
            className="font-black select-none text-[23vw] leading-none text-center whitespace-nowrap text-transparent bg-clip-text bg-white"
            style={{
                fontFamily: "'BeaufortForLoL Heavy', system-ui, Avenir, Helvetica, Arial, sans-serif",
                fontWeight: 900,
                // WebkitTextStroke: '2px white',
                color: '#C79B3B',
            }}
          >
            REWIND
          </h1>
        </motion.div>
      </motion.div>
    </>
  );
}