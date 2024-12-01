export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-8 md:space-y-16 lg:px-8">{children}</div>
    </div>
  )
}
