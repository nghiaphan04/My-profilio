// components/LyricsPanel.tsx
'use client'

import { motion } from 'framer-motion'

export default function LyricsPanel({ lyrics }: { lyrics: string }) {
  return (
    <motion.div
      key={lyrics}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex-1 h-[400px] overflow-y-auto shadow-lg w-full md:w-auto"
    >
      <h3 className="text-lg font-bold mb-4">Lyrics</h3>
      <pre className="whitespace-pre-wrap text-zinc-100 leading-relaxed">{lyrics}</pre>
    </motion.div>
  )
}
