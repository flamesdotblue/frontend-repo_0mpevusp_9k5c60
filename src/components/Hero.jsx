import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Top gradient and vignette overlays (don't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.6)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start">
        <p className="text-cyan-300/90 text-xs uppercase tracking-[0.3em] mb-4">Portfolio • Games • 3D • Design</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow">
          Building immersive experiences
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500">across code, 3D, and design</span>
        </h1>
        <p className="mt-5 max-w-2xl text-white/80">
          I craft futuristic visuals, responsive games, and performant web apps.
          Explore my skills and download my latest indie builds.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#downloads"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-medium shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
          >
            Download my game <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium hover:border-white/30 hover:bg-white/5 transition"
          >
            See what I do
          </a>
        </div>
      </div>
    </section>
  );
}
