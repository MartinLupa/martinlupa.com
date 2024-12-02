'use client'

import { useState } from 'react'
import { Badge } from '../components/Badge'
import { Navigation } from '../components/Navigation'
import { FaArrowUp } from "react-icons/fa6";

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
  const [output, setOutput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement GPT interaction logic here
    console.log('Submitted prompt:', prompt)

    setPrompt('')

    setTimeout(() => {
      setOutput("Martin's experience with React includes building a variety of projects, such as a personal portfolio, a blog, and a web application for a client. He has experience with state management libraries like Redux and Recoil, as well as testing libraries like Jest and React Testing Library.")
    }, 2000)
  }

  const handleBadgeClick = (tech: string) => {
    setPrompt(`Tell me about Martin's experience with ${tech}.`)
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8 md:space-y-16 lg:px-8">
      <Navigation />
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">AI-Powered Career Insights</h2>
        <p className="mt-4 text-zinc-400">
          Explore My Professional Journey. Interact with my AI assistant, trained on insights from my personal
          repositories and resume. Ask about my skills, projects, and relevant experience to get a personalized overview
          of my work and expertise.
        </p>
      </div>

      <div className="h-px w-full bg-zinc-800" />

      {output && <p className='text-zinc-100 whitespace-pre-wrap'>{output}</p>}

      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything about Martin's experience..."
          className="w-full rounded-3xl  border-zinc-600 bg-zinc-800 px-4 py-2 text-zinc-100 placeholder-zinc-400 focus:border-zinc-600 focus:outline-none focus:ring-zinc-600"
          rows={4}
        />
        <button
          type="submit"
          className="absolute bottom-3 right-2 rounded-full bg-zinc-700 px-3 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600"
        >
          <FaArrowUp size={16} />
        </button>
      </form>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold text-zinc-100">Technologies I have used:</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge onClick={() => handleBadgeClick(tech)} key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
