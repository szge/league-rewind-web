import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
  });

  const zoom = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 100]
  );

  return (
    <motion.div
      ref={wrapperRef}
      className="h-[300vh] relative"
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: zoom }}
          className="relative w-full px-4"
        >
          <h1
            className="font-black select-none text-[23vw] leading-none text-center whitespace-nowrap"
          >
            REWIND
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
}