import React from 'react'
import { topicsToIcons } from '@/utils/topics-to-icons'
interface TechStackProps {
  stack: string[] | undefined
}

//eslint-disable-next-line
export const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {stack?.map((tech, index) => {
        const IconComponent = topicsToIcons[tech]

        return topicsToIcons[tech] ? <IconComponent title={tech} key={index} size={32} /> : null
      })}
    </div>
  )
}
