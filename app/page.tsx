import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "COMP163 Personal Portfolio",
    description:
      "A personal portfolio project built to present my work, technical growth, and web development progress.",
    tech: ["Python"],
    github: "https://github.com/jdbartlett929/comp163-personal-portfolio",
  },
  {
    title: "COMP163 Assignment 6",
    description:
      "Built a contact information formatter that handles user input and formats contact details into clean output.",
    tech: ["Python"],
    github: "https://github.com/jdbartlett929/comp163-assignment-6",
  },
  {
    title: "COMP163 Assignment 5",
    description:
      "A Python programming assignment focused on logic, structure, and solving class-related coding problems.",
    tech: ["Python"],
    github: "https://github.com/jdbartlett929/comp163-assignment-5",
  },
  {
    title: "COMP163 Assignment 4",
    description:
      "A Python class project demonstrating problem-solving, program flow, and foundational coding skills.",
    tech: ["Python"],
    github: "https://github.com/jdbartlett929/comp163-assignment-4",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Julian Bartlett
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl">
          Computer Science student building practical projects in web
          development, Linux, and technical problem-solving.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/jdbartlett929"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-5 py-3 text-black transition hover:opacity-90"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/julian-b-bbba61331/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-zinc-500"
          >
            LinkedIn
          </a>

          <a
            href="/Julian%20Bartlett%20resume%202026.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-zinc-500"
          >
            Resume
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-zinc-500"
          >
            View Projects
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
        <p className="mt-6 max-w-3xl text-zinc-300">
          I am a Computer Science student focused on learning how to build
          useful software, strengthen my technical skills, and create projects
          that show real execution. I am especially interested in web
          development, Linux systems, and hands-on technical problem-solving.
        </p>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-zinc-800 p-6 transition hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-zinc-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-900 px-3 py-1 text-sm text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm text-zinc-300 underline hover:text-white"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
        <p className="mt-6 text-zinc-300">
          Email: jdbartlett@aggies.ncat.edu
        </p>
        <p className="mt-2 text-zinc-300">
          GitHub: github.com/jdbartlett929
        </p>
        <p className="mt-2 text-zinc-300">
          LinkedIn: linkedin.com/in/julian-b-bbba61331
        </p>
      </section>
    </main>
  );
}
