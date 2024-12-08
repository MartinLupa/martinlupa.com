import { Navigation } from '@/app/components/Navigation'
import { TechStack } from '@/app/components/TechStack'
// import { fetchRepositoryData } from '@/utils/github/graphql-api'
import { readFile } from 'fs/promises'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type tParams = Promise<{ projectSlug: string }>

export default async function projectDetailsPage(props: { params: tParams }) {
  const { projectSlug } = await props.params
  // const repoData = await fetchRepositoryData({ name: projectSlug })
  const repoData = JSON.parse(await readFile('./repositories.json', 'utf8')).filter(
    (repo: { name: string }) => repo.name === projectSlug,
  )[0]

  console.log('repoData: ', repoData)
  return (
    <div className="mx-auto max-w-7xl space-y-8 md:space-y-16 lg:px-8">
      <Navigation disableLinks={true} />
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">{projectSlug}</h2>
        <p className="mt-4 text-zinc-400">{repoData.description}</p>
      </div>
      {repoData.repositoryTopics.nodes && (
        <TechStack
          stack={repoData.repositoryTopics.nodes.map((node: { topic: { name: string } }) => node.topic.name)}
        />
      )}

      <div className="h-px w-full bg-zinc-800" />
      {repoData.features && (
        <div className="space-y-12">
          {repoData.features.map(
            (feature: { title: string; description: string; codeSnippet: string; language: string }) => (
              <div
                key={feature.title}
                className="space-y-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-xl">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
                <SyntaxHighlighter
                  language={feature.language}
                  style={tomorrowNightEighties}
                  showLineNumbers
                  wrapLines
                  customStyle={{
                    fontSize: '14px',
                    overflowY: 'auto',
                    overflowWrap: 'break-word',
                    maxWidth: '100%',
                    borderRadius: '4px',
                  }}
                >
                  {feature.codeSnippet}
                </SyntaxHighlighter>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  )
}
