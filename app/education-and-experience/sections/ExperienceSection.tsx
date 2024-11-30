import { ExperienceCard } from "@/app/components/ExperienceCard"

export default function ExperienceSection() {
  const relevantExperienceData = [
    {
      institution: 'DFDS',
      degree: 'Fullstack Developer - B2B, B2C website and platform tools',
      location: 'Copenhagen, Denmark',
      duration: 'Apr 2024 – Ongoing',
      bulletPoints: [
        'Refactored the data fetching process of a Next.js platform, reducing build time and improving code readability and testability.',
        'Migrated pages from the `pages` to the `app` router in Next.js, implementing CSR and SSR strategies.',
        'Fully refactored CI/CD pipelines for granular deployment control using Vercel CLI, code quality checks, and automated testing pipelines.',
        'Extended a Node.js (NestJS) forms management backend, integrating multiple systems via new subscribers.',
        'Configured AWS infrastructure using Terraform for reverse proxy and form management solutions.',
        'Refactored reverse proxy path-matching logic to support multi-application content migration.',
        'Designed and implemented new components and API endpoints using TypeScript, React, and Next.js.',
        'Monitored frontend performance with Grafana Faro and uptime checks via Grafana Synthetic Monitoring.',
        'Actively participated in architectural decision-making and code reviews to promote best practices.',
      ],
    },
    {
      institution: 'DFDS',
      degree: 'Student Developer - B2B website and platform tools',
      location: 'Copenhagen, Denmark',
      duration: 'Jan 2023 – Mar 2024',
      bulletPoints: [
        'Designed and implemented content models in Contentful to support new business cases.',
        'Integrated gRPC API calls with Teamtailor and EasyCruit systems.',
        'Developed and tested new features and components using TypeScript, React, and Next.js.',
        'Improved modularity and maintainability by creating new packages and refactoring existing codebases.',
      ],
    },
    {
      institution: 'Iskaypet Group',
      degree: 'Associate Software Developer - E-commerce website + OMS microservices',
      location: 'Málaga, Spain',
      duration: 'May 2022 – Oct 2022',
      bulletPoints: [
        'Built and maintained microservices for an in-house Order Management System (OMS) using Go, focusing on reliability and scalability.',
        'Developed event-driven architecture with AWS EventBridge, SQS, and DynamoDB, handling high message volumes.',
        'Refactored and implemented controllers in a Node.js MVC project to align backend functionality with frontend templates.',
        'Created product list and details pages for an e-commerce platform using React.js.',
      ],
    },
  ]

  return (
    <div className="space-y-2">
      {relevantExperienceData.map((item, index) => (
        <ExperienceCard
          key={index}
          institution={item.institution}
          degree={item.degree}
          location={item.location}
          duration={item.duration}
          bulletPoints={item.bulletPoints}
        />
      ))}
    </div>
  )
}
