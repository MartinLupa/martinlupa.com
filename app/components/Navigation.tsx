'use client'

import { navigationLinks } from '@/utils/navigation-links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

export function Navigation() {
  const pathname = usePathname()

  const ref = useRef<HTMLElement>(null)
  const [isIntersecting, setIntersecting] = useState(true)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 ${
          isIntersecting ? 'border-transparent bg-zinc-900/0' : 'bg-zinc-900/500 border-zinc-800'
        }`}
      ></div>
      <div>
        <ul className="flex items-center justify-between">
          <Link className="text-sm text-zinc-500 duration-500 hover:text-zinc-300" href="/">
            <FaArrowLeft size={24} />
          </Link>
          <div className="flex w-auto gap-4">
            {navigationLinks
              .filter((item) => item.href !== pathname)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </ul>
      </div>
    </header>
  )
}
