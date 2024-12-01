import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const contactInfo = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/martin-lupa/',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/MartinLupa',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:martinignaciolupa@gmail.com',
  },
]

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Contact</h2>
      </div>

      <div className="h-px w-full bg-zinc-800" />

      <div className="mt-8">
        <p className="text-zinc-400 mb-6">
          Feel free to reach out to me through any of the following channels. I'm always open to new opportunities and collaborations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

