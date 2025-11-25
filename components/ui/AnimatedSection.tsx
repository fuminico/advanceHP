'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, viewportOptions } from '@/lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  variants = fadeInUp,
  delay = 0
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
