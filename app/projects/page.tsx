import { Card } from '../components/card'

export default function Projects() {
  return (
    <div>
      <Card
        title="vercel-deploy-action"
        description="This GitHub Action automates the deployment of applications to Vercel, streamlining your CI/CD workflow. 
          It supports both single and monorepo architectures and integrates seamlessly with existing GitHub workflows. Ideal for 
          teams looking to automate their deployment process, this action simplifies deploying to Vercel with minimal configuration."
        repoUrl="https://github.com/MartinLupa/vercel-deploy-action"
        techStack={['aws']}
      />
      <Card
        title="vercel-deploy-action"
        description="This GitHub Action automates the deployment of applications to Vercel, streamlining your CI/CD workflow. 
          It supports both single and monorepo architectures and integrates seamlessly with existing GitHub workflows. Ideal for 
          teams looking to automate their deployment process, this action simplifies deploying to Vercel with minimal configuration."
        repoUrl="https://github.com/MartinLupa/vercel-deploy-action"
        techStack={['aws']}
      />
    </div>
  )
}
