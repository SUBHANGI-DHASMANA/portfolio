'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionContainer({ children, id, className = '' }: SectionContainerProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={`min-h-screen py-16 px-4 sm:px-8 md:px-16 flex flex-col justify-center ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
}
