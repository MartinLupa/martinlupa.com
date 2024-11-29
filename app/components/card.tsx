'use client'

import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { TechStack } from './techStack'

interface CardProps {
  title: string
  description: string
  repoUrl: string
  demoUrl?: string
  techStack?: string[]
}

export const Card: React.FC<CardProps> = ({ title, description, repoUrl, demoUrl, techStack }) => {
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
    <div
      onMouseMove={onMouseMove}
      className="group relative overflow-hidden rounded-xl border border-zinc-600 duration-700 hover:border-zinc-400/50 hover:bg-zinc-800/10 md:gap-8"
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
        <p className="mb-6 text-sm text-zinc-400">{description}</p>
        <TechStack stack={techStack} />
        <div className="mt-6 flex items-center justify-end">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-zinc-200 "
          >
            <Github size={24} />
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-zinc-200"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
