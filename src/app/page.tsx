import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import WorkExperienceSection from "@/components/work-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
