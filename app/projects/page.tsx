import { fetchAllRepos } from '@/utils/github'
import { Card } from '../components/card'

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default async function Projects() {
  const repositoriesData = await fetchAllRepos()

  return (
    <div className="relative pb-16">
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">

        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            {repositoriesData.map((repo: Repository) => (
            <Card
              key={repo.id}
              title={repo.name}
              description={repo.description}
              repoUrl={repo.html_url}
              // techStack={['react', 'typescript']}
            />
            ))}
        </div>
      </div>
    </div>
  )
}
