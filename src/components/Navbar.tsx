export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Julian Bartlett
        </a>

        <div className="flex items-center gap-6 text-sm text-zinc-300">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
          <a
            href="https://github.com/jdbartlett929"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-700 px-3 py-2 transition hover:border-zinc-500 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}