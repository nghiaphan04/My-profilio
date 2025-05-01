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
      description: 'Discover apps that help plan your perfect getaway with ease.',
      width: 'w-[60%]',
      githubUrl: 'https://github.com/example/travel-app',
      siteUrl: 'https://travel-app.example.com',
    },
    {
      id: '2',
      title: 'Contemplate the Meaning of Life Twice a Day',
      category: 'MIND',
      image: '/course1.png',
      description: 'Apps to help you pause, reflect, and stay centered.',
      width: 'w-[35%]',
      githubUrl: 'https://github.com/example/mindful-app',
      siteUrl: 'https://mindful.example.com',
    },
    {
      id: '3',
      title: 'Urban Exploration Apps for the Vertically-Inclined',
      category: 'STEPS',
      image: '/course2.png',
      description: 'Explore cities from new heights and unlock vertical challenges.',
      width: 'w-[45%]',
      githubUrl: 'https://github.com/example/urban-explorer',
      siteUrl: 'https://urbanexplorer.example.com',
    },
    {
      id: '4',
      title: 'Take Control of Your Hat Life With This Stunning New App',
      category: 'HATS',
      image: '/course3.png',
      description: 'Style your headwear like never before with this smart app.',
      width: 'w-[50%]',
      githubUrl: 'https://github.com/example/hat-app',
      siteUrl: 'https://hatapp.example.com',
    },
  ]
  

export default function ProjectPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className="mx-60 md:my-30 text-white p-6">
   
      <div className="flex flex-wrap gap-6">
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
