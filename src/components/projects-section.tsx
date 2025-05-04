"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import projects from "@/constants/projects"


export default function ProjectsSection() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem and showcase different
            skills and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            className={filter === "all" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "web" ? "default" : "outline"}
            className={filter === "web" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            onClick={() => setFilter("web")}
          >
            Web Apps
          </Button>
          <Button
            variant={filter === "ai-powered-web" ? "default" : "outline"}
            className={filter === "ai-powered-web" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            onClick={() => setFilter("ai-powered-web")}
          >
            AI Powered Web
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-900/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-fill w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-800 text-emerald-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-emerald-400 hover:text-emerald-300"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-emerald-400 hover:text-emerald-300"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
