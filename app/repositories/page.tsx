import { fetchAllRepos } from '@/utils/github/rest-api'
import { fetchPinnedRepositories } from '@/utils/github/graphql-api'
import { Card } from '../components/card'
import { TbPinned } from 'react-icons/tb'

// TODO: Split interface between REST Repository and GRAPHQL Repository
interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  url: string
  createdAt?: string
  primaryLanguage?: { name: string }
  stargazerCount?: number
  forks?: { totalCount: number }
}

export default async function Projects() {
  const pinnedRepositories = await fetchPinnedRepositories()
  const repositoriesData = await fetchAllRepos()

  return (
    <div className="relative pb-16">
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Repositories
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-bold tracking-tight sm:text-xl">Pinned</h3>
          <TbPinned size={32} />
        </div>

        {pinnedRepositories.map((repo: Repository) => {
          ;<Card
            key={repo.id}
            title={repo.name}
            description={repo.description}
            repoUrl={repo.html_url}
            // TODO: add demoUrl and techStack here
          />
        })}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {pinnedRepositories.map((repo: Repository) => (
            <Card
              key={repo.id}
              title={repo.name}
              description={repo.description}
              repoUrl={repo.html_url}
              // TODO: add demoUrl and techStack here
            />
          ))}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        {/* All Repositories */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {repositoriesData.map((repo: Repository) => (
            <Card
              key={repo.id}
              title={repo.name}
              description={repo.description}
              repoUrl={repo.html_url}
              // Optionally add demoUrl or techStack here
            />
          ))}
        </div>
      </div>
    </div>
  )
}
