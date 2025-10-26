import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Downloads from "./components/Downloads";

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} YourName — All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="mailto:you@example.com" className="hover:text-cyan-300 transition">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">LinkedIn</a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <Hero />
      <Skills />
      <Downloads />
      <Footer />
    </div>
  );
}
