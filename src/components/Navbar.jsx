import { Rocket, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-cyan-400" />
          <span className="font-semibold tracking-wide">YourName</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-cyan-300 transition">Home</a>
          <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
          <a href="#downloads" className="hover:text-cyan-300 transition">Games</a>
          <a href="#contact" className="hover:text-cyan-300 transition flex items-center gap-1">
            <Star className="w-4 h-4" /> Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
