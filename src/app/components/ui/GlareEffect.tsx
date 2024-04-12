"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

const animationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

interface GlareEffectsProps {
  children: React.ReactNode;
  className?: string;
}

const GlareEffect: React.FC<GlareEffectsProps> = ({
  children,
  className = `m-auto flex flex-col items-center 
  gap-10 p-32 text-white  bg-[#3a3a3a41] rounded-xl 
  backdrop-blur-sm  w-9/12 border-[#3a3a3a41] 
   border-solid  overflow-hidden relative   `,
}) => {
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);

  const [showGlare, setShowGlare] = useState<boolean>(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    setShowGlare(true);
  };
  const handleMouseLeave = () => {
    setShowGlare(false);
  };

  return (
    <motion.div
      style={{
        position: "relative",
      }}
      {...animationProps}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
      <AnimatePresence>
        {showGlare && (
          <motion.div
            style={{
              position: "absolute",
              top: -5,
              left: -5,
              width: "100%",
              height: "100%",
              pointerEvents: "none", // Make sure the overlay doesn't capture mouse events
            }}
            {...animationProps}
          >
            <motion.div
              style={{
                position: "absolute",
                top: y,
                left: x,
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                boxShadow: `
          0 0 60px  20px rgba(255, 255, 255, 0.8),
          0 0 100px 40px rgba(255, 255, 255, 0.6),
          0 0 140px 60px rgba(255, 255, 255, 0.4)
          `,
                filter: "blur(10px) brightness(1.5)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GlareEffect;
