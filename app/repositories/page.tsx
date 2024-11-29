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

  const pinnedColors = [
    'bg-blue-00',
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500',
  ]

  return (
    <>
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

      <div className="grid grid-cols-1 grid-rows-2 gap-8 sm:grid-cols-2">
        {/* First card takes full height of the two rows */}
        <div className="row-span-2">
          <Card
            title={pinnedRepositories[0]?.name}
            description={pinnedRepositories[0]?.description}
            repoUrl={pinnedRepositories[0]?.html_url}
            className={`${
              pinnedColors[0 % pinnedColors.length]
            } text-zinc-200 h-full`}
          />
        </div>

        {/* Stacked cards on the right */}
        {pinnedRepositories.slice(1, 3).map((repo: Repository, index: number) => (
          <div key={repo.id} className="flex">
            <Card
              title={repo.name}
              description={repo.description}
              repoUrl={repo.html_url}
              className={`${
                pinnedColors[(index + 1) % pinnedColors.length]
              } text-zinc-200`}
            />
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-zinc-800" />

      {/* All other Repositories */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {repositoriesData.map((repo: Repository) => (
          <Card
            key={repo.id}
            title={repo.name}
            description={repo.description}
            repoUrl={repo.html_url}
          />
        ))}
      </div>
    </>
  )
}
