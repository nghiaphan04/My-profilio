'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
const slides = [
  {
    image: '/course1.png',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    author: 'LUNDEV',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...',
  },
  {
    image: '/course2.png',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    author: 'LUNDEV',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...',
  },
  {
    image: '/course3.png',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    author: 'LUNDEV',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...',
  },
  {
    image: '/course4.png',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    author: 'LUNDEV',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...',
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 7000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <div className="relative w-screen h-screen overflow-hidden text-white font-sans">
      {/* Slide content */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={slides[index].image}
              width={400}
              height={400}
              alt="Slide"
              className="w-full h-full object-cover  opacity-20"
            />
            <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-4/5 md:w-3/5 text-shadow-lg">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="uppercase tracking-[10px] font-bold">{slides[index].author}</div>
              </motion.div>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-5xl font-bold mt-2">{slides[index].title}</div>
              </motion.div>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-5xl font-bold text-orange-500 mt-1">{slides[index].topic}</div>
              </motion.div>
              <motion.p
                className="mt-4 text-sm max-w-xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                {slides[index].description}
              </motion.p>
              <motion.div
                className="flex gap-4 mt-6"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <button className="bg-white text-black px-6 py-2 font-semibold">SEE MORE</button>
                <button className="border border-white px-6 py-2">SUBSCRIBE</button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-8 left-5/6 transform -translate-x-1/2 hidden md:flex gap-4 z-40">
        {slides.map((s, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-20 h-32 rounded-xl overflow-hidden cursor-pointer relative border-2 ${
              index === i ? 'border-orange-500' : 'border-transparent'
            }`}
          >
            <Image width={400} height={400} src={s.image} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
            
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-18 md:bottom-18 left-1/2 transform -translate-x-1/2 flex gap-4 z-40">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/30 text-white hover:bg-white hover:text-black transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/30 text-white hover:bg-white hover:text-black transition"
        >
          ›
        </button>
      </div>

      {/* Progress bar */}
      <motion.div
        key={index}
        className="absolute top-0 left-0 h-[3px] bg-orange-500 z-50"
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 7, ease: 'linear' }}
      />
    </div>
  );
}
