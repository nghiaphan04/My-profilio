'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AvatarSpin() {
  return (
    <div className="flex justify-end">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-green-400 border-dashed"
        />
        <Image
          src="/avatar1.jpg"
          width={400}
          height={400}
          alt="Avatar"
          className="rounded-full w-56 h-56 object-cover z-10"
        />
      </div>
    </div>
  );
}
