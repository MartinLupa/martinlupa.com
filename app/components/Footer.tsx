'use client'

import { usePathname } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()

  return (
    <footer className={pathname === '/' ? 'hidden' : 'mx-auto max-w-7xl'}>
      <div className="mx-auto max-w-7xl space-y-8 py-8 md:space-y-16 lg:py-8">
        <p className="text-center text-xs leading-5 text-zinc-500">
          &copy; {new Date().getFullYear()} Martin Lupa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
