'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CardType } from '../types/CardType'

export default function CardProject({
  card,
  onClick,
  index,
}: {
  card: CardType
  onClick: () => void
  index: number
}) {
  return (
    <motion.div
      layoutId={`card-${card.id}`}
      onClick={onClick}
      className={`rounded-xl overflow-hidden cursor-pointer bg-zinc-900 ${card.width ?? 'w-full w-1/2 md:w-1/3 lg:w-1/4'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Image
        src={card.image}
        alt={card.title}
        width={400}
        height={400}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <p className="uppercase text-sm text-zinc-400">{card.category}</p>
        <h2 className="text-lg font-bold leading-tight">{card.title}</h2>
      </div>
    </motion.div>
  )
}
