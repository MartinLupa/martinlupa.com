import React from 'react'
import { SiGithubactions } from 'react-icons/si'

interface TechStackProps {
  stack: string[] | undefined
}

export const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {stack?.map(() => (
        stack === undefined ? null :
        <SiGithubactions title="Github Actions" key={''} size={32} />
      ))}
    </div>
  )
}
