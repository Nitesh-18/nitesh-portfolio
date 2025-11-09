import { Button } from "./ui/button"
import { Code, FileDown, Globe, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Software Developer</h3>
            <p className="text-slate-300 mb-6">
              I&apos;m Nitesh, an Software Developer focused on building reliable and scalable web applications. I work with modern stacks including Next.js, React, Node.js, Python and MongoDB, and I aim to deliver solutions that balance performance, maintainability, and a strong user experience.
            </p>
            <p className="text-slate-300 mb-6">
              Outside of engineering, I value clear communication and practical problem solving. I regularly explore ways to apply automation and AI to real-world workflows, and I enjoy learning new tools that improve product quality and developer productivity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Code className="mx-auto mb-2 text-emerald-400" size={24} />
                <h4 className="font-bold">Development</h4>
                <p className="text-sm text-slate-400">Clean, efficient code</p>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Lightbulb className="mx-auto mb-2 text-emerald-400" size={24} />
                <h4 className="font-bold">Creative</h4>
                <p className="text-sm text-slate-400">Innovative solutions</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Globe className="mx-auto mb-2 text-emerald-400" size={24} />
                <h4 className="font-bold">Responsive</h4>
                <p className="text-sm text-slate-400">All devices covered</p>
              </div>
            </div>

            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2 cursor-pointer">
                <FileDown className="w-4 h-4" />
                View Resume
              </Button>
            </a>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-emerald-500">
              <Image
                src="/Avatar.png"
                alt="Nitesh — Developer"
                width={360}
                height={360}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
