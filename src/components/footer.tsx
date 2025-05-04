import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              N<span className="text-emerald-500">Dev</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> by Nitesh | &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
