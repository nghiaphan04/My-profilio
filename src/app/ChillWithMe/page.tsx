'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import YouTubePlayerCard from '../../../components/YoutubePlayerCard'
import LyricsPanel from '../../../components/LyricsPanel'
import { Track } from '../../../types/Track'

const tracks: Track[] = [
  {
    id: 1,
    title: 'As You Were',
    artist: 'TrackTribe',
    youtubeId: 'dQw4w9WgXcQ',
    lyrics: `As you were...\nTime flows on\nEchoes of memories\nIn every song`,
  },
  {
    id: 2,
    title: 'Falling Skies',
    artist: 'Nova Sound',
    youtubeId: '3JZ_D3ELwOQ',
    lyrics: `Falling from the sky...\nAll I see is light\nNo turning back\nWe're born to fly`,
  },
]

export default function ChillWithMe() {
  const [currentTrackId, setCurrentTrackId] = useState<number>(1)
  const currentTrack = tracks.find((t) => t.id === currentTrackId)!

  return (
    <div className="min-h-screen  md:px-60 py-30 bg-gradient-to-br from-purple-800 to-pink-500 text-white">
      <div className="mb-6">
        <select
          className="bg-zinc-900 text-white px-4 py-2 rounded"
          value={currentTrackId}
          onChange={(e) => setCurrentTrackId(Number(e.target.value))}
        >
          {tracks.map((track) => (
            <option key={track.id} value={track.id}>
              {track.title} - {track.artist}
            </option>
          ))}
        </select>
      </div>

      <AnimatePresence mode="wait">
        <div
          key={currentTrackId}
          className="flex gap-8 flex-col md:flex-row items-center md:items-start"
        >
          <YouTubePlayerCard track={currentTrack} />
          <LyricsPanel lyrics={currentTrack.lyrics} />
        </div>
      </AnimatePresence>
    </div>
  )
}
