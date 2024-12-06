/**
 * Useful links:
 * Github GraphQL Explorer: https://docs.github.com/en/graphql/overview/explorer
 * Allows you to test queries and mutations against Github's API
 */

const GET_PINNED_REPOSITORIES_QUERY = `
  {
      user(login: "${process.env.GITHUB_USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              createdAt
              url
              description
              languages {
                nodes {
                  name
                }
              }
              repositoryTopics (first: 10) {
                nodes {
                  topic {
                    name 
                  }
            
                }
              }
            }
          }
        }
      }
    }`

export interface GraphQLRepository {
  name: string
  createdAt: string
  url: string
  description: string | null
  languages: { nodes: { name: string }[] }
  repositoryTopics: { nodes: { topic: { name: string } }[] }
}

//eslint-disable-next-line
async function fetchGithubGraphQL(query: string): Promise<any> {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { tags: ['posts'] },
  }).then((response) => response.json())
}

export async function fetchPinnedRepositories() {
  const response = await fetchGithubGraphQL(GET_PINNED_REPOSITORIES_QUERY)
  return response.data.user.pinnedItems.nodes
}
