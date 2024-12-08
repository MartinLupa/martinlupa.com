import { GraphQLRepository } from '@/utils/github/graphql-api'
import { Card } from '../components/GeneralCard'
import { Navigation } from '../components/Navigation'
import { readFile } from 'node:fs/promises'

export default async function Projects() {
  // const pinnedRepositories = await fetchPinnedRepositories()

  // Temporarily read from local .json for testing.
  const pinnedRepositories = JSON.parse(await readFile('./public/repositories.json', 'utf8'))
  console.log(process.env.NEXT_PUBLIC_BASE_URL)

  return (
    <div className="mx-auto max-w-7xl space-y-8 md:space-y-16 lg:px-8">
      <Navigation />
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Repositories</h2>
        <p className="mt-4 text-zinc-400">
          The following projects are my pinned repositories on GitHub, showcasing the ones I believe best represent my
          current professional focus.
        </p>
      </div>
      <div className="h-px w-full bg-zinc-800" />
      <div className="grid grid-cols-1 grid-rows-2 gap-8 sm:grid-cols-2">
        {pinnedRepositories.map((repo: GraphQLRepository) => (
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
