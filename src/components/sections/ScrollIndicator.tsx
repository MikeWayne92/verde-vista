import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  scrollTo: string; // ID of the element to scroll to
}

export default function ScrollIndicator({ scrollTo }: ScrollIndicatorProps) {
  const handleClick = () => {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="text-white/70 text-sm font-medium mb-2">Scroll</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/70"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    </motion.div>
  );
} 