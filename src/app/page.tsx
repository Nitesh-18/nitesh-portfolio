import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import dynamic from "next/dynamic"
import Footer from "@/components/footer"
import LazyLoad from "@/components/LazyLoad"

// Import dynamically to keep bundle small
const AboutSection = dynamic(() => import("@/components/about-section"))
const ProjectsSection = dynamic(() => import("@/components/projects-section"))
const WorkExperienceSection = dynamic(() => import("@/components/work-section"))
const SkillsSection = dynamic(() => import("@/components/skills-section"))
const ContactSection = dynamic(() => import("@/components/contact-section"))

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />

      <LazyLoad>
        <AboutSection />
      </LazyLoad>

      <LazyLoad>
        <ProjectsSection />
      </LazyLoad>

      <LazyLoad>
        <WorkExperienceSection />
      </LazyLoad>

      <LazyLoad>
        <SkillsSection />
      </LazyLoad>

      <LazyLoad>
        <ContactSection />
      </LazyLoad>

      <Footer />
    </main>
  )
}
