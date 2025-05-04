"use client"
import { Button } from "./ui/button"
import { ArrowDown, FileDown } from "lucide-react"
import ThreeBackground from "./three-background"
import { redirect } from "next/navigation"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-slate-900/30 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-emerald-400">Nitesh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">Software Developer</h2>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            I build modern web applications using cutting-edge technologies, bringing both creativity and technical depth to every project I take on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <a href="#experience">View My Work</a>
            </Button>

            <a href="/Resume.pdf" download>
              <Button variant="outline" className="border-emerald-600 text-emerald-400 flex items-center gap-2 cursor-pointer">
                <FileDown className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" className="text-white rounded-full" onClick={scrollToAbout}>
            <ArrowDown size={36} />
          </Button>
        </div>
      </div>
    </section>
  )
}
