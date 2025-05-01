'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
};

export default function ContactInfoItem({ icon, title, text, delay = 0 }: Props) {
  return (
    <motion.div
      className="flex items-center space-x-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <span className="text-green-400 text-2xl bg-gray-700 p-3 rounded-sm">{icon}</span>
      <div>
        <p className="font-semibold">{title}</p>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}
