"use client"

import { useEffect, useState } from "react"

type Experience = {
  role: string
  company: string
  period: string
  location?: string
  description: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    role: "Web Development Intern",
    company: "Vereigen Media",
    period: "Mar 2024 – Present",
    location: "Remote",
    description:
      "Developed a multilingual Excel-to-HTML converter using Python & Flask for B2B marketing; created WordPress posts, landing pages, and a role-based Task Manager app with admin & user dashboards.",
    current: true,
  },
  {
    role: "Technical Core Team Member",
    company: "Google Developer Student Club (GDSC)",
    period: "Aug 2022 – May 2023",
    location: "JSPM Pune",
    description:
      "Organized web development quizzes and provided structured learning roadmaps to support peer skill-building and community engagement.",
  },
  {
    role: "Technical Core Member",
    company: "Microsoft Learn Student Club (MLSC)",
    period: "Jul 2021 – May 2022",
    location: "JSPM Pune",
    description:
      "Led sessions on Git/GitHub and collaborated on workshops to foster tech learning among peers through projects and meetups.",
  },
]

const WorkExperienceSection = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experiences</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A timeline of professional roles and student leadership initiatives I’ve been part of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`p-6 border border-slate-800 rounded-lg transition-all hover:border-emerald-500
              skill-appear skill-float`}
              style={{
                animationDelay: hasMounted ? `${idx * 0.2}s` : "0s",
              }}
            >
              <h3 className="text-xl font-bold text-emerald-400">{exp.role}</h3>
              <p className="text-slate-200 font-medium mt-1">
                {exp.company}{" "}
                {exp.current && <span className="text-xs bg-emerald-700 text-white px-2 py-0.5 rounded ml-2">Current</span>}
              </p>
              <p className="text-slate-400 text-sm mt-1">{exp.period}</p>
              {exp.location && <p className="text-slate-500 text-sm">{exp.location}</p>}
              <p className="text-slate-300 mt-4 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceSection
