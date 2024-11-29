export default function EducationAndExperienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        {children}
      </div>
    </div>
  )
}
