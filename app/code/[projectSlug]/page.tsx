interface Params {
  [key: string]: any
}

export default async function projectDetailsPage({ params }: { params: Params }) {
    console.log("params: ", await params)
    const pageParams = await params
  return (
    <div className="mx-auto max-w-7xl space-y-8 md:space-y-16 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">{pageParams.projectSlug}</h2>
        <p className="mt-4 text-zinc-400">
          Explore My Professional Journey. Interact with my AI assistant, trained on insights from my personal
          repositories and resume. Ask about my skills, projects, and relevant experience to get a personalized overview
          of my work and expertise.
        </p>
      </div>

      <div className="h-px w-full bg-zinc-800" />
    </div>
  )
}
