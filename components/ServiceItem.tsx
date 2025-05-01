'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

type Props = {
  id: string
  title: string
  description: string
  index: number
}

const ServiceItem = ({ id, title, description, index }: Props) => {
  return (
    <motion.div
      className="group relative border-b border-zinc-700 pb-6 flex items-center justify-between cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >

      <div className="transition-colors duration-300 group-hover:text-green-400">
        <p className="text-zinc-400 font-mono text-3xl  mb-2">{id}</p>
        <h3 className="text-2xl font-bold font-mono">{title}</h3>
        <p className="text-zinc-400 mt-2 max-w-sm">{description}</p>
      </div>

    
      <motion.div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white text-black"
        whileHover={{
          rotate: -90,
          backgroundColor: '#22c55e',
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowDownRight className="w-5 h-5" />
      </motion.div>
    </motion.div>
  )
}

export default ServiceItem
