import Navbar from "@/components/Navbar";
import TechMarquee from "@/components/TechMarquee";

const projects = [
  {
    title: "COMP163 Personal Portfolio",
    description:
      "A personal portfolio project built to present my work, technical growth, and web development progress.",
    tech: ["Python"],
    github: "https://github.com/jdbartlett929/comp163-personal-portfolio",
  },
  {
    title: "StreamVault",
    description:
      "Netflix-inspired streaming dashboard built with Next.js, TypeScript, and Tailwind CSS. Includes a featured hero section, movie search, genre filtering, responsive movie cards, and a watchlist feature.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/jdbartlett929/streamvault",
    live: "https://streamvault-self.vercel.app",
  },
  {
    title: "Task Tracker",
    description:
      "Full-stack task management application built with Next.js and Supabase authentication. Users can create accounts, sign up, and log in securely.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/jdbartlett929/task-tracker",
    live: "https://task-tracker-beta-indol.vercel.app"
  },
  {
    title: "DevBoard",
    description:
      "Interactive GitHub analytics dashboard built with Next.js, TypeScript, Tailwind CSS, GitHub API, and Recharts. Visualizes repository metrics, language usage, and developer activity through a modern dashboard interface.",
    tech: ["Next.js", "TypeScript", "GitHub API", "Recharts"],
    github: "https://github.com/jdbartlett929/devboard",
    live: "https://devboard-sooty.vercel.app",
  },
  {
    title: "CareerPilot",
    description:
      "Full-stack career management platform built with Next.js, TypeScript, Tailwind CSS, and Supabase. Users can manage job applications, analyze resumes, track interviews, and organize their job search through a modern dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/jdbartlett929/careerpilot",
    live: "https://careerpilot-tan.vercel.app",
  },
];

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Linux",
  "GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <div className="mb-12">
          <p className="section-label mb-8">
            Based in NC
          </p>

          <div className="mb-8">
            <h1 className="max-w-2xl text-6xl font-light leading-[1.05] tracking-[-0.04em] md:text-7xl">
              Julian Bartlett
              <span className="block text-[#00f5a0]">
                Software Engineer
              </span>
              & Full Stack Developer
            </h1>
          </div>

          <p className="body-text text-xl max-w-2xl mb-8">
            Computer Science student building practical projects in web
            development, Linux, and technical problem-solving.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl border border-[#00f5a0] text-[#00f5a0] px-6 py-3 transition hover:bg-[#00f5a0] hover:text-black"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-zinc-500"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="text-zinc-600 text-sm">
          ↓
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <p className="section-label mb-4">About</p>
        <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
        <p className="body-text text-xl max-w-2xl mt-6">
          I am a Computer Science student focused on learning how to build
          useful software, strengthen my technical skills, and create projects
          that show real execution. I am especially interested in web
          development, Linux systems, and hands-on technical problem-solving.
        </p>
      </section>

      <TechMarquee />

      <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
        <p className="section-label mb-4">Skills</p>
        <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="elias-card px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="section-label mb-4">Portfolio</p>
            <h2 className="text-5xl font-light">Featured Projects.</h2>
          </div>
          <a href="#projects" className="text-sm text-[#00f5a0] hover:text-white transition">
            View Projects →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="elias-card overflow-hidden rounded-lg flex flex-col transition hover:border-[#00f5a0] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
            >
              <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <p className="text-zinc-400 text-sm">{project.title}</p>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-900 px-2 py-1 text-xs text-[#00f5a0] border border-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="body-text text-sm flex-1 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-3 pt-4 border-t border-zinc-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center text-sm text-[#00f5a0] hover:bg-zinc-900 py-2 rounded transition"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center text-sm text-[#00f5a0] hover:bg-zinc-900 py-2 rounded transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-light mb-8 leading-[1.05] tracking-[-0.04em]">
              Let's build the
              <span className="block text-[#00f5a0]">
                future
              </span>
              together.
            </h2>

            <p className="body-text mb-8">Lets Connect.</p>

            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/in/julian-b-bbba61331/" target="_blank" rel="noreferrer" className="text-[#00f5a0] hover:text-white transition">
                🔗 LinkedIn
              </a>

              <a href="https://github.com/jdbartlett929" target="_blank" rel="noreferrer" className="text-[#00f5a0] hover:text-white transition">
                🔗 GitHub
              </a>

              <a href="mailto:jdbartlett@aggies.ncat.edu" className="text-[#00f5a0] hover:text-white transition">
                🔗 Email
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-[0.35em] text-zinc-500 mb-2">Inquiry Type</label>
                <select className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white">
                  <option>General Collaboration</option>
                  <option>Software Project</option>
                  <option>Internship Opportunity</option>
                  <option>Networking</option>
                </select>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-[0.35em] text-zinc-500 mb-2">Message</label>
                <textarea className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white h-24"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#00f5a0] text-black py-2 rounded font-semibold hover:bg-[#00d478] transition">
                Send Brief
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}