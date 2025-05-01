
'use client'
import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-green-400 text-3xl font-bold mb-2">Let&apos;s work together</h2>
      <p className="text-gray-400 mb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil sapiente pariatur id totam.
      </p>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input className="bg-[#0d0d0d] p-3 rounded-md text-sm w-full" type="text" placeholder="Firstname" />
          <input className="bg-[#0d0d0d] p-3 rounded-md text-sm w-full" type="text" placeholder="Lastname" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input className="bg-[#0d0d0d] p-3 rounded-md text-sm w-full" type="email" placeholder="Email address" />
          <input className="bg-[#0d0d0d] p-3 rounded-md text-sm w-full" type="tel" placeholder="Phone number" />
        </div>
        <select className="bg-[#0d0d0d] p-3 rounded-md text-sm w-full">
          <option>Select a service</option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>UI/UX Design</option>
        </select>
        <textarea
          rows={4}
          className="bg-[#0d0d0d] p-3 rounded-md text-sm w-full"
          placeholder="Type your message here."
        />
        <button
          type="submit"
          className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-500 transition"
        >
          Send message
        </button>
      </form>
    </motion.div>
  );
}
