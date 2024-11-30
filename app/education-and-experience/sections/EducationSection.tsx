import { ExperienceCard } from "@/app/components/ExperienceCard"

export default function EducationSection() {
  const educationData = [
    {
      institution: 'IT University of Copenhagen',
      degree: 'MSc in Software Design',
      location: 'Copenhagen, Denmark',
      duration: 'Aug 2022 – Jun 2024',
    },
    {
      institution: 'CodeSpace Academy',
      degree: 'Full-Stack Web Development Bootcamp',
      location: 'Malaga, Spain',
      duration: 'Sep 2021 – Mar 2022',
    },
    {
      institution: 'Litoral National University of Economical Sciences',
      degree: 'BSc Accounting, Economics and Administration',
      location: 'Santa Fe, Argentina',
      duration: 'Mar 2008 – Dec 2016',
    },
  ]

  return (
    <div className="space-y-2">
      {educationData.map((item, index) => (
        <ExperienceCard
          key={index}
          institution={item.institution}
          degree={item.degree}
          location={item.location}
          duration={item.duration}
        />
      ))}
    </div>
  )
}
