'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function ProfileIntro() {
  const names = ['Phan Đình Nghĩa', 'A Backend Developer'];
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === names[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 4500);
      return;
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % names.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => isDeleting ? prev - 1 : prev + 1);
      setDisplayText(names[index].substring(0, subIndex));
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-sm uppercase">Software Developer</p>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight relative min-h-[120px]">
        Hello I&apos;m <br />
        <span className="text-green-400 relative">
          {displayText}
          <span className="text-green">{blink ? '|' : ' '}</span>
        </span>
      </h1>

      <p className="text-gray-400">
        I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
      </p>

      <div className="flex flex-col pt-2 justify-center items-center md:pt-2 md:flex-row md:justify-start gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="inline-flex items-center gap-2 bg-transparent border border-green-400 text-green-400 px-5 py-2 rounded-full w-fit"
        >
          <FaDownload /> Download CV
        </motion.a>

        <div className="flex gap-4 pt-1 flex-wrap md:ms-3">
          <a href="#"><FaLinkedin className="w-6 h-6 hover:text-blue-600 text-green-400 transition" /></a>
          <a href="#"><FaGithub className="w-6 h-6 hover:text-gray-600 text-green-400 transition" /></a>
          <a href="#"><FaYoutube className="w-6 h-6 hover:text-red-600 text-green-400 transition" /></a>
        </div>
      </div>
    </div>
  );
}
