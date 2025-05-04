"use client"

import skills from "@/constants/skills"

const frontendSkills = skills.filter((skill) => skill.type === "frontend")
const backendSkills = skills.filter((skill) => skill.type === "backend")
const otherSkills = skills.filter((skill) => skill.type === "other")

const renderSkillTags = (skillsArray: typeof skills) => {
  return skillsArray.map((skill, idx) => (
    <div
      key={idx}
      className={`mb-4 p-1 border border-slate-800 rounded-lg transition-all hover:border-emerald-500
        skill-appear skill-float`}
      style={{
        animationDelay: `${idx * 0.2}s`,
      }}
      onMouseEnter={(e) => e.currentTarget.classList.add("paused")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("paused")}
    >
      <h4 className="text-lg font-semibold text-emerald-400">{skill.name}</h4>
      <div className="text-sm text-slate-300 mt-1 flex gap-4">
        <span className="bg-slate-800 px-2 py-1 rounded-full text-xs">⏳ {skill.experience}</span>
        <span className="bg-slate-800 px-2 py-1 rounded-full text-xs">📁 {skill.context}</span>
      </div>
    </div>
  ))
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A mix of production-ready tools and experimental frameworks I’ve worked with over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-950 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Frontend</h3>
            {renderSkillTags(frontendSkills)}
          </div>

          <div className="bg-slate-950 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Backend</h3>
            {renderSkillTags(backendSkills)}
          </div>

          <div className="bg-slate-950 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Other Skills</h3>
            {renderSkillTags(otherSkills)}
          </div>
        </div>
      </div>
    </section>
  )
}
