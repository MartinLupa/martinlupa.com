export const repositoriesDataPath =
  process.env.VERCEL_ENV === 'production'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/public/repositories.json`
    : './public/repositories.json'