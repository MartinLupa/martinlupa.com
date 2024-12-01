import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  onClick?: () => void
}

export function Badge({ children, onClick, ...props }: BadgeProps) {
  return (
    <span
      onClick={onClick}
      className={
        'focus:ring-offset-zinc-90 inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-100 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2'
      }
      {...props}
    >
      {children}
    </span>
  )
}
