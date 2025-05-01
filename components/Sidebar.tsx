import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const items = ["Experience", "Education", "Skills", "About me"];

export default function Sidebar({ selected, onSelect }: { selected: string; onSelect: (item: string) => void }) {
  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <motion.button
          key={item}
          onClick={() => onSelect(item)}
          className={`px-6 py-2 rounded-md text-left font-medium ${
            selected === item
              ? "bg-green-400 text-black"
              : "bg-[#1a1a1a] text-white hover:bg-green-800"
          }`}
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{
            delay: index * 0.1,
            duration: 0.4, 
          }}
        >
          {item}
        </motion.button>
      ))}
    </div>
  );
}
