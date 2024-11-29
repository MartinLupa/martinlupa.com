'use client'

import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import { CalendarDays, Clock } from 'lucide-react'
import Link from 'next/link'

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
}

export const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, readTime, slug }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 })

  //eslint-disable-next-line
  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <Link href={`/blog/${slug}`}>
      <div
        onMouseMove={onMouseMove}
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-zinc-600 duration-700 hover:border-zinc-400/50 hover:bg-zinc-800/10 md:gap-8"
      >
        <div className="pointer-events-none">
          <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br via-zinc-100/10 opacity-100 transition duration-1000 group-hover:opacity-50"
            style={style}
          />
          <motion.div
            className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
            style={style}
          />
        </div>

        <div className="relative z-20 p-8">
          <h2 className="mb-4 text-xl font-bold text-zinc-200">{title}</h2>
          <p className="mb-6 text-sm text-zinc-400">{excerpt}</p>
          <div className="flex items-center justify-between text-sm text-zinc-500">
            <div className="flex items-center">
              <CalendarDays size={16} className="mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
