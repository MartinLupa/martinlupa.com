'use client'

import { useState } from 'react'
import { Badge } from '../components/Badge'

// TODO: Investigate if it is possible to fetch them dynamically from Github's API?
const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'GraphQL',
  'REST API',
  'Docker',
  'AWS',
  'Git',
  'CI/CD',
  'Jest',
  'React Testing Library',
]

export default function ExperiencePage() {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement GPT interaction logic here
    console.log('Submitted prompt:', prompt)
    setPrompt('')
  }

  const handleBadgeClick = (tech: string) => {
    setPrompt(`Tell me about Martin's experience with ${tech}.`)
  }

  return (
    <>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">AI-Powered Career Insights</h2>
        <p className="mt-4 text-zinc-400">
          Dive into my professional journey with my AI assistant. Ask about my skills, projects, and experiences to get
          insights about my experience.
        </p>
      </div>

      <div className="h-px w-full bg-zinc-800" />

      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything about my experience..."
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-100 placeholder-zinc-400 focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          rows={4}
        />
        <button
          type="submit"
          className="absolute bottom-3 right-2 rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600"
        >
          Send
        </button>
      </form>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold text-zinc-100">Technologies I Know:</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge onClick={() => handleBadgeClick(tech)} key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </>
  )
}
