import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-kawaii-gradient">
      {/* Kawaii Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="animate-float absolute left-[10%] top-[15%] text-4xl opacity-40" style={{ animationDelay: '0s' }}>🌸</div>
        <div className="animate-float absolute right-[15%] top-[20%] text-3xl opacity-40" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="animate-float absolute left-[20%] bottom-[25%] text-3xl opacity-40" style={{ animationDelay: '2s' }}>🎀</div>
        <div className="animate-float absolute right-[10%] bottom-[30%] text-4xl opacity-40" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="animate-float absolute left-[5%] top-[50%] text-2xl opacity-30" style={{ animationDelay: '1.5s' }}>💫</div>
        <div className="animate-float absolute right-[5%] top-[60%] text-3xl opacity-30" style={{ animationDelay: '2.5s' }}>🌙</div>
        <div className="animate-float absolute left-[15%] top-[80%] text-2xl opacity-30" style={{ animationDelay: '3s' }}>💖</div>
        <div className="animate-float absolute right-[20%] top-[10%] text-2xl opacity-30" style={{ animationDelay: '3.5s' }}>🍡</div>
        
        {/* Cute Cloud Shapes */}
        <div className="absolute -left-20 top-20 h-40 w-60 rounded-full bg-pink-100/50 blur-3xl" />
        <div className="absolute -right-20 top-40 h-32 w-48 rounded-full bg-purple-100/50 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 h-36 w-52 rounded-full bg-blue-100/30 blur-3xl" />

        {/* Dotted Pattern Overlay */}
        <div className="bg-kawaii-dots absolute inset-0 opacity-30" />
      </div>

      {/* Main Content */}
      <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Corner Decorations */}
        <div className="absolute left-6 top-6 flex items-center gap-1">
          <span className="text-2xl">🎀</span>
          <div className="h-2 w-12 rounded-full bg-gradient-to-r from-pink-300 to-transparent" />
        </div>
        <div className="absolute right-6 top-6 flex items-center gap-1">
          <div className="h-2 w-12 rounded-full bg-gradient-to-l from-purple-300 to-transparent" />
          <span className="text-2xl">⭐</span>
        </div>
        <div className="absolute bottom-6 left-6 flex items-center gap-1">
          <span className="text-2xl">💖</span>
          <div className="h-2 w-12 rounded-full bg-gradient-to-r from-pink-300 to-transparent" />
        </div>
        <div className="absolute bottom-6 right-6 flex items-center gap-1">
          <div className="h-2 w-12 rounded-full bg-gradient-to-l from-purple-300 to-transparent" />
          <span className="text-2xl">🌸</span>
        </div>

        {/* Todo List Component */}
        <div className="animate-fadeIn w-full max-w-2xl" style={{ animationDelay: '0.2s' }}>
          <TodoList />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 flex items-center gap-2 text-center text-sm text-pink-400/60">
          <span>🌸</span>
          <p>สร้างด้วยความรัก | Next.js & Tailwind CSS</p>
          <span>🌸</span>
        </footer>
      </main>
    </div>
  );
}
