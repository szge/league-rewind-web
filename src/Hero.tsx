import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import video from "./assets/ekkotest1.mp4";
import crashSound from "./assets/crash.mp3";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const crashAudioRef = useRef<HTMLAudioElement | null>(null);
  const crashTriggered = useRef(false);

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

  const videoProgress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0, 0, 1, 1]
  );


  useMotionValueEvent(videoProgress, "change", (latest) => {
    const video = videoRef.current;
    if (video && video.duration) {
      const time = latest * video.duration;
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        video.currentTime = time;
      });
    }
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!crashTriggered.current && crashAudioRef.current && latest > 0.7) {
      crashTriggered.current = true;
      crashAudioRef.current.play();
    }
  });

  return (
    <>
      <div ref={wrapperRef} className="h-[150vh]" />
      <motion.div
        style={{
          opacity,
        }}
        className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden pointer-events-none z-50"
      >
        <video
          ref={videoRef}
          src={video}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />

        {/* Overlay gradient for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" /> */}

        <motion.div
          style={{ scale: zoom }}
          className="relative w-full px-4 z-10"
        >
          <h1
            className="font-black select-none text-[23vw] leading-none text-center whitespace-nowrap text-transparent bg-clip-text bg-white"
            style={{
              fontFamily: "'BeaufortForLoL Heavy', system-ui, Avenir, Helvetica, Arial, sans-serif",
              fontWeight: 900,
              color: '#C79B3B',
              textShadow: '0 0 40px rgba(0,0,0,0.5)',
            }}
          >
            REWIND
          </h1>
        </motion.div>
      </motion.div>
      <audio ref={crashAudioRef} src={crashSound} preload="auto" style={{ display: 'none' }} />
    </>
  );
}