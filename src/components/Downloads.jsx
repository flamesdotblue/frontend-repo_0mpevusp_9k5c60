import { Download, Gamepad2 } from "lucide-react";

const games = [
  {
    title: "Nebula Drift",
    description:
      "Fast‑paced arcade space runner with neon trails, synthwave vibes, and tight controls.",
    // Replace this with your actual build link when ready
    link: "https://github.com/githubtraining/hellogitworld/archive/refs/heads/master.zip",
    platform: ["Windows", "macOS"],
    thumbnail:
      "https://images.unsplash.com/photo-1520975922284-9f844d1f3d19?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Downloads() {
  return (
    <section id="downloads" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Games & Downloads</h2>
            <p className="text-white/70 max-w-2xl mt-2">
              Grab the latest build of my indie projects. More platforms coming soon.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g) => (
            <article key={g.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img
                  src={g.thumbnail}
                  alt={g.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-cyan-300 mb-2">
                  <Gamepad2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Arcade • Neon</span>
                </div>
                <h3 className="font-semibold text-lg">{g.title}</h3>
                <p className="text-sm text-white/70 mt-1 mb-4">{g.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {g.platform.map((p) => (
                      <span key={p} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
                        {p}
                      </span>
                    ))}
                  </div>
                  <a
                    href={g.link}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-xs font-medium shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
