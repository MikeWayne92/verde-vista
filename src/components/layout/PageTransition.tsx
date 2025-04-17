import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: -10,
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Overlay animation for page transitions
const overlayVariants = {
  initial: { 
    scaleX: 0,
    originX: 0,
  },
  animate: {
    scaleX: 0,
    originX: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={router.asPath}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Overlay that animates during page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath + '-overlay'}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-brand-green-600 z-50 transform origin-left pointer-events-none"
        />
      </AnimatePresence>
    </div>
  );
} 