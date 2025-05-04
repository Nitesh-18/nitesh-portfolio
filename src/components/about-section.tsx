import { Button } from "./ui/button"
import { Code, Globe, Lightbulb } from "lucide-react"
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
              I&apos;m Nitesh, a passionate Software Developer with hands-on experience in crafting dynamic, scalable web applications. I specialize in React.js, Node.js, and MongoDB, and I've also worked extensively with Next.js, Flask, and modern JavaScript frameworks. My journey in tech began with a deep curiosity for how things work—leading me to build web projects during my early college days. Over time, this passion grew into a mission to build AI-powered solutions that not only look great but solve real-world problems.
            </p>
            <p className="text-slate-300 mb-6">
              When I&apos;m not deep in code, I&apos;m probably at the beach, gaming, or lost in an endless scroll of reels. I like keeping things fun, but I&apos;m always curious and open to learning cool new stuff that makes the web even more awesome.
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

            <Button className="bg-emerald-600 hover:bg-emerald-700">Download Resume</Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-emerald-500">
              <Image
                src="/Avatar.png"
                alt=" Developer"
                width={360}
                height={360}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
