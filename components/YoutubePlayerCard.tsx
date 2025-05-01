// components/YouTubePlayerCard.tsx
'use client'

import { motion } from 'framer-motion'
import { Track } from '../types/Track'

export default function YouTubePlayerCard({ track }: { track: Track }) {
  return (
    <motion.div
      key={track.youtubeId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut',delay: 0.1 }}
      className="w-full md:w-[480px] hover:scale-105 transition-transform duration-300"
    >
      <div className="aspect-video mb-4 rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${track.youtubeId}?autoplay=0`}
          title={track.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-xl font-semibold">{track.title}</h2>
      <p className="text-zinc-300">{track.artist}</p>
    </motion.div>
  )
}
