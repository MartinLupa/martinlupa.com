export interface RESTRepository {
  id: number
  name: string
  description: string
  html_url: string
  created_at: string
  language: string
}

//TODO: probably flip into fetching by ID so I get to decide which are the most relevant ones and only show those.
export const fetchAllRepos = async () => {
  try {
    const repositoriesData = await fetch('https://api.github.com/users/MartinLupa/repos', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })
    const repositories = await repositoriesData.json()
    return repositories
  } catch (error) {
    console.error(error)
  }
}
