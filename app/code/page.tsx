import { fetchAllRepos, RESTRepository } from '@/utils/github/rest-api'
import { fetchPinnedRepositories, GraphQLRepository } from '@/utils/github/graphql-api'
import { TbPinned } from 'react-icons/tb'
import { Card } from '../components/GeneralCard'
import { Navigation } from '../components/Navigation'

export default async function Projects() {
  const pinnedRepositories = await fetchPinnedRepositories()
  const repositoriesData = await fetchAllRepos()

  // console.log("Pinned Repositories: ", pinnedRepositories)

  const pinnedColors = ['bg-blue-500', 'bg-green-500', 'bg-red-500']

  return (
    <div className="mx-auto max-w-7xl space-y-8 md:space-y-16 lg:px-8">
      <Navigation />
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Repositories</h2>
        <p className="mt-4 text-zinc-400">Some of the projects are from work and some are on my own time.</p>
      </div>
      <div className="h-px w-full bg-zinc-800" />
      <div className="grid grid-cols-1 grid-rows-2 gap-8 sm:grid-cols-2">
        {/* First card takes full height of the two rows */}
        {/* <div className="row-span-2">
          <Card
            title={pinnedRepositories[0]?.name}
            description={pinnedRepositories[0]?.description}
            repoUrl={pinnedRepositories[0]?.html_url}
            className={`${pinnedColors[0 % pinnedColors.length]} h-full text-zinc-200`}
            createdAt={pinnedRepositories[0]?.createdAt}
          />
        </div> */}

        {/* Stacked cards on the right */}
        {pinnedRepositories.map((repo: GraphQLRepository, index: number) => (
          <Card
            key={repo.name}
            title={repo.name}
            description={repo.description}
            repoUrl={repo.url}
            createdAt={repo.createdAt}
            href={`code/${repo.name}`}
            topics={repo?.repositoryTopics.nodes.map((topic) => topic.topic.name)}
          />
        ))}
      </div>
    </div>
  )
}
