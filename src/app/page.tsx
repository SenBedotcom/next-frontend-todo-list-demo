import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0a09]">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="animate-pulse-glow absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/10 blur-3xl" />
        <div className="animate-pulse-glow absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/10 blur-3xl" style={{ animationDelay: '1.5s' }} />
        <div className="animate-float absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-400/5 to-transparent blur-2xl" />

        {/* Grid Pattern */}
        <div className="bg-grid absolute inset-0" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Main Content */}
      <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Decorative Elements */}
        <div className="absolute left-8 top-8 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-500" />
          <div className="h-2 w-8 rounded-full bg-gradient-to-r from-amber-500/50 to-transparent" />
        </div>
        <div className="absolute bottom-8 right-8 flex items-center gap-2">
          <div className="h-2 w-8 rounded-full bg-gradient-to-l from-orange-500/50 to-transparent" />
          <div className="h-2 w-2 rounded-full bg-orange-500" />
        </div>

        {/* Todo List Component */}
        <div className="animate-fadeIn w-full max-w-2xl" style={{ animationDelay: '0.2s' }}>
          <TodoList />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 text-center text-sm text-white/20">
          <p>สร้างด้วย Next.js & Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
}
