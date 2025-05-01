'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Card from '../../../components/CardProject'
import CardModal from '../../../components/CardProjectModal'

const cards = [
  {
    id: '1',
    title: '5 Inspiring Apps for Your Next Trip',
    category: 'TRAVEL',
    image: '/course4.png',
    description: 'Discover apps...',
    width: 'w-full sm:w-[60%] md:w-[60%] lg:w-[60%]',  // Mobile responsive width
  },
  {
    id: '2',
    title: 'Contemplate the Meaning of Life Twice a Day',
    category: 'MIND',
    image: '/course1.png',
    description: 'Apps to help you pause, reflect, and stay centered.',
    width: 'w-full sm:w-[35%] md:w-[35%] lg:w-[35%]',  // Mobile responsive width
  },
  {
    id: '3',
    title: 'Urban Exploration Apps for the Vertically-Inclined',
    category: 'STEPS',
    image: '/course2.png',
    description: 'Explore cities from new heights and unlock vertical challenges.',
    width: 'w-full sm:w-[45%] md:w-[45%] lg:w-[45%]',  // Mobile responsive width
  },
  {
    id: '4',
    title: 'Take Control of Your Hat Life With This Stunning New App',
    category: 'HATS',
    image: '/course3.png',
    description: 'Style your headwear like never before with this smart app.',
    width: 'w-full sm:w-[50%] md:w-[50%] lg:w-[50%]',  // Mobile responsive width
  },
]

export default function ProjectPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className="px-4 pt-28 pb-8 bg-black  md:px-20 lg:px-60 md:pt-32  text-white">
      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => setSelectedId(card.id)}
            index={index}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <CardModal
            card={cards.find((c) => c.id === selectedId)!}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
