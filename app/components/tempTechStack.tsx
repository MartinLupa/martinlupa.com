import React from 'react'
import { SiGithubactions, SiTerraform, SiAmazon } from 'react-icons/si'

interface TechStackProps {
  stack: string[] | undefined
}

//eslint-disable-next-line
export const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {/* {stack?.map(() => (stack === undefined ? null : <SiGithubactions title="Github Actions" key={''} size={32} />))} */}
      <SiGithubactions title="Github Actions" key={'1'} size={32} />
      <SiTerraform title="Terraform" key={'2'} size={32} />
      <SiAmazon title="AWS" key={'3'} size={32} />
    </div>
  )
}
