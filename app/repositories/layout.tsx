export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      {children}
    </div>
  )
}