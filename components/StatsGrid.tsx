/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Stat = {
  value: number;
  label: string;
  duration: number; // thời gian đếm lên (ms)
};

export default function StatsGrid() {
  const stats: Stat[] = [
    { value: 8, label: "Technologies mastered", duration: 1300 },
    { value: 12, label: "Years of experience", duration: 1000 },
    { value: 26, label: "Projects completed", duration: 1500 },
    { value: 499, label: "Code commits", duration: 1000 },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const intervals = 60;

    const timers = stats.map((stat, index) => {
      const steps = stat.duration / intervals;
      const step = stat.value / steps;

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] = Math.min(updated[index] + Math.ceil(step), stat.value);
          }
          return updated;
        });
      }, intervals);
    });

    return () => {
      timers.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-20 text-white">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <p className="text-3xl font-bold">+{counts[i]}</p>
          <p className="text-sm text-gray-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
