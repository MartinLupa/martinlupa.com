export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-8 md:space-y-16 lg:px-8">{children}</div>
    </div>
  )
}
