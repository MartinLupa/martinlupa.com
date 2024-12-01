'use client'

import { navigationLinks } from '@/utils/navigation-links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa6'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="my-16">
      <ul className="flex items-center justify-between">
        <Link className="text-sm text-zinc-500 duration-500 hover:text-zinc-300" href="/">
          <FaArrowLeft size={32} />
        </Link>
        <div className="flex w-auto gap-4">
          {navigationLinks
            .filter((item) => item.href !== pathname)
            .map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-500 duration-500 hover:text-zinc-300">
                {item.name}
              </Link>
            ))}
        </div>
      </ul>
    </nav>
  )
}
