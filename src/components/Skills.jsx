import { Palette, Layers, Gamepad2, Code } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "Graphics Design",
    desc: "Branding, posters, thumbnails, social assets with a futuristic aesthetic.",
    chips: ["Photoshop", "Illustrator", "Figma"],
    color: "from-pink-500/30 to-fuchsia-500/20",
  },
  {
    icon: Layers,
    title: "3D Art",
    desc: "Stylized and sci‑fi scenes, hard‑surface modeling, lighting, and renders.",
    chips: ["Blender", "Texturing", "Rendering"],
    color: "from-violet-500/30 to-blue-500/20",
  },
  {
    icon: Gamepad2,
    title: "Game Dev",
    desc: "Gameplay systems, UI/UX, performance passes, and build pipelines.",
    chips: ["Unity/Unreal", "C#", "Shaders"],
    color: "from-cyan-500/30 to-emerald-500/20",
  },
  {
    icon: Code,
    title: "Coding",
    desc: "Modern web stacks, APIs, and tools for fast, reliable apps.",
    chips: ["React", "FastAPI", "MongoDB"],
    color: "from-amber-500/30 to-rose-500/20",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I do</h2>
        <p className="text-white/70 max-w-2xl mb-12">
          A multi‑disciplinary creator blending design, 3D, gameplay, and code to build immersive digital experiences.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, desc, chips, color }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition blur-xl bg-gradient-to-br ${color}`} />
              <div className="relative">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-sm text-white/70 mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <span key={c} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
