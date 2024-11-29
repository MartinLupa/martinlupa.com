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