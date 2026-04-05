"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Julian Bartlett
        </a>

        <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
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

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white md:hidden"
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-zinc-800 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-zinc-300">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-white"
            >
              Contact
            </a>
            <a
              href="https://github.com/jdbartlett929"
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded-lg border border-zinc-700 px-3 py-2 transition hover:border-zinc-500 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}