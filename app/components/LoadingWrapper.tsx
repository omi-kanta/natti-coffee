'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';
import ScrollWalker from './ScrollWalker';
import { useLoading } from './LoadingContext';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { setLoaderShowing } = useLoading();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('natti_top_visited');
    if (!hasVisited) {
      sessionStorage.setItem('natti_top_visited', 'true');
      setShowLoader(true);
      setLoaderShowing(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleFinish = useCallback(() => {
    setIsLoading(false);
    setLoaderShowing(false);
  }, []);

  return (
    <>
      {showLoader && <Loader onFinish={handleFinish} />}
      <ScrollWalker />
      <motion.div
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
}
