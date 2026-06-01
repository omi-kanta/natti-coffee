'use client';

import { motion } from 'framer-motion';

interface CloudProps {
  width?: number;
  opacity?: number;
  style?: React.CSSProperties;
  duration?: number;
}

export default function Cloud({
  width = 120,
  opacity = 0.6,
  style,
  duration = 6,
}: CloudProps) {
  return (
    <motion.div
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      animate={{ x: [0, 8, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 200 100"
        style={{ width, display: 'block', opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="100" cy="65" rx="90" ry="40" fill="white" />
        <ellipse cx="70" cy="50" rx="50" ry="38" fill="white" />
        <ellipse cx="130" cy="48" rx="45" ry="35" fill="white" />
        <ellipse cx="100" cy="40" rx="38" ry="30" fill="white" />
      </svg>
    </motion.div>
  );
}
