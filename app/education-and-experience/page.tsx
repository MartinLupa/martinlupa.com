import { Navigation } from '../components/Navigation'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'

export default function EducationAndExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 md:space-y-16 lg:px-8">
      <Navigation />
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Education</h2>
      </div>
      <div className="h-px w-full bg-zinc-800" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
        <EducationSection />
      </div>

      {/* <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Certifications</h2>
      </div>
      <div className="h-px w-full bg-zinc-800" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1"> */}
      {/* Here goes Education and Experience content */}
      {/* <CertificationsSection /> */}
      {/* </div> */}

      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Relevant Experience</h2>
      </div>

      <div className="h-px w-full bg-zinc-800" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
        <ExperienceSection />
      </div>
    </div>
  )
}
