'use client'

import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import { TechStack } from './TechStack'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string | null
  repoUrl: string
  demoUrl?: string
  techStack?: string[] | undefined
  createdAt: string
  className?: string
  topics?: string[]
  href: string
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  // repoUrl,
  // demoUrl,
  // techStack,
  createdAt,
  className,
  topics,
  href,
}) => {
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

  const date = new Date(createdAt).toLocaleDateString('en-US', { dateStyle: 'medium' })

  return (
    <Link href={href}>
      <div
        onMouseMove={onMouseMove}
        className={`group relative overflow-hidden rounded-xl border border-zinc-600 duration-700 hover:border-zinc-400/50 hover:bg-zinc-800/10 md:gap-8 ${className}`}
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

        <div className="relative z-20 flex h-full flex-col p-8">
          <div className="flex-grow">
            <time dateTime={new Date(createdAt).toISOString()}>{date}</time>

            <h2 className="mb-4 text-xl font-bold text-zinc-200">{title}</h2>
            <p className="mb-6 text-sm text-zinc-400">{description}</p>
            {topics && <TechStack stack={topics} />}
          </div>
          {/* <div className="mt-6 flex items-center justify-end">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-zinc-200"
              >
                <Github size={24} />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-zinc-400 transition-colors hover:text-zinc-200"
              >
                <ExternalLink size={24} />
              </a>
            )}
          </div> */}
        </div>
      </div>
    </Link>
  )
}
