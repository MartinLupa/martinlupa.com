import './globals.css'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import { Metadata } from 'next'
import { Analytics } from './components/analytics'

export const metadata: Metadata = {
  title: {
    default: 'martinlupa.com',
    template: '%s | martinlupa.com',
  },
  description:
    'Full-Stack Developer with expertise in JavaScript, TypeScript, Go, React, Next.js, Node.js, and AWS. Skilled in building scalable, secure applications, DevOps pipelines, and cloud infrastructure using Docker, Terraform, and CI/CD.',
  openGraph: {
    title: 'martinlupa.com',
    description: 'Full-Stack Developer: React.js, Next.js, Node.js, Go, AWS, IaC)',
    url: 'https://martinlupa.com',
    siteName: 'martinlupa.com',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.png',
  },
}
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <head>
        <Analytics />
      </head>
      <body className={'bg-black text-zinc-500'}>{children}</body>
    </html>
  )
}
