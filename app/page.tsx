import Link from 'next/link'
import React from 'react'
import Particles from './components/Particles'

const navigation = [
  { name: 'Experience', href: '/education-and-experience' },
  // { name: 'Repositories', href: '/repositories' },
  // { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Career insights', href: '/career-insights' },
]

export default async function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-500 duration-500 hover:text-zinc-300">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="animate-glow h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={200} />
      <h1 className="text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text px-0.5 py-3.5 font-display text-6xl text-transparent duration-1000">
        Martin Lupa
      </h1>
      <div className="animate-glow h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 animate-fade-in text-center">
        <h2 className="text-lg text-zinc-500">Full-Stack Developer: React.js, Next.js, Node.js, Go, AWS, IaC, CI/CD</h2>
      </div>
    </div>
  )
}
