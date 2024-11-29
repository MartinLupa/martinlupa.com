import React from 'react'
import { SiGithubactions } from 'react-icons/si'

interface TechStackProps {
  stack: string[]
}

export const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map(() => (
        <SiGithubactions title="Github Actions" key={'Github Actions'} size={32} />
      ))}
    </div>
  )
}
