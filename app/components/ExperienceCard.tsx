interface ExperienceSectionProps {
  institution: string
  degree: string
  location: string
  duration: string
  bulletPoints?: string[] // Optional array for bullet points
}

export const ExperienceCard: React.FC<ExperienceSectionProps> = ({
  institution,
  degree,
  location,
  duration,
  bulletPoints,
}) => {
  return (
    <div className="relative">
      <div className="group relative overflow-visible border-l border-zinc-600 duration-700 hover:border-zinc-400/50 hover:bg-zinc-800/100">
        {/* Circle for the timeline */}
        <div className="absolute left-[-11px] top-1/2 z-10 h-5 w-5 -translate-y-1/2 transform rounded-full border-4 border-zinc-800 bg-zinc-600 group-hover:bg-zinc-400/50"></div>

        <div className="relative z-20 flex flex-col p-8">
          <h3 className="text-lg font-bold text-zinc-200">{institution}</h3>
          <p className="mt-1 text-sm text-zinc-400">{degree}</p>
          <div className="mt-4 flex justify-between text-sm text-zinc-500">
            <span>{location}</span>
            <span>{duration}</span>
          </div>
          {/* Bullet points section */}
          {bulletPoints && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-400">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
