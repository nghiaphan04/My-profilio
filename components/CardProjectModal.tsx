'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CardType } from '../types/CardType'
import { Github, Link2 } from 'lucide-react'

export default function CardModal({
  card,
  onClose,
}: {
  card: CardType
  onClose: () => void
}) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        layoutId={`card-${card.id}`}
        className="bg-zinc-900 rounded-2xl overflow-hidden max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={card.image}
          alt={card.title}
          width={800}
          height={400}
          className="w-full h-80 object-cover"
        />
        <div className="p-6 space-y-4">
          <p className="uppercase text-sm text-zinc-400">{card.category}</p>
          <h2 className="text-2xl font-bold">{card.title}</h2>
          <p className="text-zinc-300">{card.description}</p>

          {/* Social links */}
          <div className="flex gap-4 mt-4">
            {card.githubUrl && (
              <a
                href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-400 transition"
                title="GitHub"
              >
                <Github size={24} />
              </a>
            )}
            {card.siteUrl && (
              <a
                href={card.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-400 transition"
                title="Live Site"
              >
                <Link2 size={24} />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-white text-black rounded hover:bg-zinc-300 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
