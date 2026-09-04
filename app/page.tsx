import BaxAI from "@/components/BaxAI";
import Navbar from "@/components/Navbar";
import TechMarquee from "@/components/TechMarquee";
import Image from "next/image";

const projects = [
  {
    title: "Bax OS / Hobby Operating System",
    description:
      "An educational x86_64 hobby operating system with a BIOS bootloader and freestanding C kernel, plus VGA, serial, interrupt, timer, keyboard, and shell code.",
    tech: ["C", "x86_64 Assembly", "Zig", "BIOS", "Kernel"],
    github: "https://github.com/jdbartlett929/OS-Project",
    live: "https://bax-os-showcase.vercel.app",
    image: "/project-images/bax-os.png",
  },
  {
    title: "Stock Market Predictor",
    description:
      "A full-stack machine-learning dashboard that uses historical AAPL data and a leakage-aware Random Forest model to predict next-day direction and compare it with a baseline.",
    tech: ["Next.js", "TypeScript", "Python", "scikit-learn", "Random Forest"],
    github: "https://github.com/jdbartlett929/stock-market-predictor",
    live: "https://stock-market-predictor-six.vercel.app",
    image: "/project-images/stock-market-predictor.png",
  },
  {
    title: "LLM Regression Detection System",
    description:
      "A CI/CD evaluation platform that compares prompt and adapter changes against a golden dataset, generates reports, and blocks configured quality regressions.",
    tech: ["Next.js", "TypeScript", "Python", "GitHub Actions", "JSON Schema"],
    github: "https://github.com/jdbartlett929/llm-regression-guard",
    live: "https://llm-regression-guard.vercel.app",
    image: "/project-images/llm-regression-guard.png",
  },
  {
    title: "Spending Tracker",
    description:
      "A privacy-focused financial dashboard that parses CSV statements in the browser, applies transparent categories, detects recurring charges, and visualizes spending.",
    tech: ["Next.js", "TypeScript", "React", "LocalStorage", "CSV"],
    github: "https://github.com/jdbartlett929/spending-tracker",
    live: "https://spending-tracker-tawny.vercel.app",
    image: "/project-images/spending-tracker.png",
  },
  {
    title: "AI Job Search Agent",
    description: "A recruiter-ready agent workflow that matches a resume to relevant openings, explains fit, and organizes application deadlines.",
    tech: ["Python", "Browserbase", "OpenAI", "PostgreSQL"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/job-search-agent",
    image: "/project-images/job-search-agent.png",
  },
  {
    title: "AI GitHub Issue Agent",
    description: "An engineering agent that traces an issue through a repository, locates relevant files, proposes a fix, and prepares draft-PR checks.",
    tech: ["GitHub API", "Python", "OpenAI", "Docker"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/github-issue-agent",
    image: "/project-images/github-issue-agent.png",
  },
  {
    title: "Personal MCP Assistant",
    description: "A context-aware assistant that combines calendar and notes information through a transparent MCP-style tool workflow.",
    tech: ["TypeScript", "MCP SDK", "OpenAI", "PostgreSQL"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/personal-mcp-assistant",
    image: "/project-images/personal-mcp-assistant.png",
  },
  {
    title: "Real-Time AI Interview Coach",
    description: "A voice-interview practice experience with adaptive follow-up questions, structured feedback, and a live communication scorecard.",
    tech: ["Realtime API", "WebRTC", "React", "FastAPI"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/interview-coach",
    image: "/project-images/interview-coach.png",
  },
  {
    title: "Concert & Festival Finder",
    description: "A personalized live-events discovery tool with followed artists, saved shows, pricing, and calendar-ready plans.",
    tech: ["React", "Ticketmaster API", "Firebase"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/concert-finder",
    image: "/project-images/concert-finder.png",
  },
  {
    title: "ResolveAI",
    description:
      "A smart issue operations platform with AI-generated impact summaries, next actions, protected routes, signed HttpOnly sessions, session rotation, validation, and rate limiting.",
    tech: ["Next.js", "TypeScript", "React", "AI Summaries", "Secure Sessions"],
    github: "https://github.com/jdbartlett929/resolve-ai",
    live: "https://resolve-ai-pearl.vercel.app",
    image: "/project-images/resolve-ai.png",
  },
  {
    title: "Neural Relay",
    description:
      "A real-time LLM operations console with WebSocket streaming, model adapters, correlation IDs, telemetry, event tracing, heartbeats, and automatic reconnection.",
    tech: ["React", "TypeScript", "WebSockets", "Node.js", "LLM Systems"],
    github: "https://github.com/jdbartlett929/neural-relay",
    live: "https://neural-relay.vercel.app",
    image: "/project-images/neural-relay.png",
  },
  {
    title: "Drone Fire Intelligence",
    description:
      "A multi-model computer-vision pipeline for normal and thermal drone footage that detects people, vehicles, fire, and thermal targets, then classifies operational risk and records evidence.",
    tech: ["Python", "OpenCV", "YOLOv8", "scikit-learn", "DVC"],
    github: "https://github.com/jdbartlett929/drone-fire-intelligence",
    image: "/project-images/drone-fire-intelligence.jpg",
  },
  {
    title: "LedgerLens for Excel",
    description:
      "A finance-focused Microsoft Excel add-in with one-click formulas, credit analysis, chart generation, data cleanup, risk flags, and executive summaries.",
    tech: ["TypeScript", "React", "Office.js", "Excel API", "Vite"],
    github: "https://github.com/jdbartlett929/ledgerlens-excel-addin",
    live: "https://ledgerlens-excel-addin.vercel.app",
    image: "/project-images/ledgerlens-excel.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio project built to present my work, technical growth, and web development progress.",
    tech: ["Python"],
    github: "https://github.com/jdbartlett929/comp163-personal-portfolio",
    image: "/project-images/comp163.png",
  },
  {
    title: "StreamVault",
    description:
      "Netflix-inspired streaming dashboard built with Next.js, TypeScript, and Tailwind CSS. Includes movie cover cards, a featured hero section, search, genre filtering, responsive design, and a watchlist feature.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/jdbartlett929/streamvault",
    live: "https://streamvault-self.vercel.app",
    image: "/project-images/streamvault.png",
  },
  {
    title: "Task Tracker",
    description:
      "Interactive task management demo where visitors can create, prioritize, filter, complete, and remove project tasks instantly.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/jdbartlett929/task-tracker",
    live: "https://task-tracker-beta-indol.vercel.app",
    image: "/project-images/task-tracker.png",
  },
  {
    title: "DevBoard",
    description:
      "Interactive GitHub analytics dashboard built with Next.js, TypeScript, Tailwind CSS, GitHub API, and Recharts. Visualizes repository metrics, language usage, and developer activity through a modern dashboard interface.",
    tech: ["Next.js", "TypeScript", "GitHub API", "Recharts"],
    github: "https://github.com/jdbartlett929/devboard",
    live: "https://devboard-sooty.vercel.app",
    image: "/project-images/devboard.png",
  },
  {
    title: "CareerPilot",
    description:
      "Interactive career dashboard for managing job applications, tracking interviews and offers, and analyzing resume keywords.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/jdbartlett929/careerpilot",
    live: "https://careerpilot-tan.vercel.app",
    image: "/project-images/careerpilot.png",
  },
  {
    title: "Online Voting System",
    description:
      "A responsive fictional election platform with one-vote-per-browser demo logic and live results.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "LocalStorage"],
    github: "https://github.com/jdbartlett929/online-voting-system",
    live: "https://online-voting-system-ruby-nine.vercel.app",
    image: "/project-images/online-voting-system.png",
  },
  {
    title: "CloudQueue",
    description:
      "AWS serverless file-processing and operations dashboard with an event-driven S3, SQS, Lambda, DynamoDB, and CloudWatch architecture.",
    tech: ["AWS", "Next.js", "TypeScript", "Lambda", "S3", "SQS"],
    github: "https://github.com/jdbartlett929/aws-cloudqueue",
    live: "https://aws-cloudqueue.vercel.app",
    image: "/project-images/aws-cloudqueue.png",
  },
  {
    title: "Atlas Agent",
    description:
      "A no-key browser-local agent with conversational planning, text summarization, calculations, code-review tools, persistent history, and editable artifacts.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "LocalStorage"],
    github: "https://github.com/jdbartlett929/atlas-agent",
    live: "https://atlas-agent-bice.vercel.app",
    image: "/project-images/atlas-agent.png",
  },
  {
    title: "Aegis Command",
    description:
      "An original cinematic voice assistant with 1,600 natural-language commands, speech recognition, spoken responses, timers, task automation, briefings, and decision analysis.",
    tech: ["Next.js", "TypeScript", "React", "Web Speech API", "Automation"],
    github: "https://github.com/jdbartlett929/aegis-command",
    live: "https://aegis-command-murex.vercel.app",
    image: "/project-images/aegis-command.png",
  },
  {
    title: "FileGuard Pro",
    description:
      "Java desktop cybersecurity tool that creates SHA-256 file baselines, scans folders for tampering, detects modified, deleted, and newly added files, calculates risk levels, and exports security reports.",
    tech: ["Java", "Swing", "SHA-256", "Cybersecurity", "File I/O"],
    github: "https://github.com/jdbartlett929/fileguard-pro",
    image: "/project-images/fileguard-pro.png",
  },
];

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "AWS",
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
          {projects.map((project) => {
            if (project.title === "Stock Market Predictor") {
              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-[2rem] border border-emerald-400/30 bg-[#07130f] md:col-span-2 transition duration-500 hover:border-emerald-300/70 hover:shadow-[0_24px_80px_rgba(0,245,160,0.14)]"
                >
                  <div className="grid h-full md:grid-cols-[1.25fr_.75fr]">
                    <div className="relative min-h-[320px] overflow-hidden border-b border-emerald-400/20 md:border-b-0 md:border-r">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top opacity-75 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03100b] via-transparent to-black/15" />

                      <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-emerald-100">
                        <span className="rounded-full border border-emerald-300/30 bg-black/70 px-3 py-2 backdrop-blur">
                          MARKET SIGNAL / AAPL
                        </span>
                        <span className="rounded-full bg-[#00f5a0] px-3 py-2 font-semibold text-black">
                          RF-01
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-emerald-300/20 bg-black/80 font-mono backdrop-blur">
                        <div className="p-3">
                          <p className="text-[9px] uppercase tracking-widest text-zinc-500">Ticker</p>
                          <p className="mt-1 text-lg text-[#00f5a0]">AAPL</p>
                        </div>
                        <div className="border-x border-emerald-300/15 p-3">
                          <p className="text-[9px] uppercase tracking-widest text-zinc-500">Horizon</p>
                          <p className="mt-1 text-lg text-white">T+1</p>
                        </div>
                        <div className="p-3">
                          <p className="text-[9px] uppercase tracking-widest text-zinc-500">Split</p>
                          <p className="mt-1 text-sm text-white">Time-aware</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col p-7 md:p-8">
                      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-[#00f5a0]">
                        Time-aware ML system
                      </p>
                      <h3 className="text-3xl font-light leading-tight tracking-[-0.035em]">
                        {project.title}
                      </h3>
                      <p className="body-text mb-7 mt-4 text-sm leading-6">
                        {project.description}
                      </p>

                      <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-emerald-200/80">
                        {project.tech.map((item) => (
                          <span key={item}>+ {item}</span>
                        ))}
                      </div>

                      <div className="mt-auto grid grid-cols-2 gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-emerald-300/30 px-4 py-3 text-center text-xs transition hover:border-[#00f5a0] hover:text-[#00f5a0]"
                        >
                          View source
                        </a>
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-[#00f5a0] px-4 py-3 text-center text-xs font-semibold text-black transition hover:bg-white"
                          >
                            Open dashboard ↗
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            if (project.title === "LLM Regression Detection System") {
              return (
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden border border-rose-400/35 bg-[#130b0d] transition duration-500 hover:border-rose-300/70 hover:shadow-[12px_12px_0_rgba(244,63,94,0.12)]"
                >
                  <div className="flex items-center justify-between border-b border-rose-300/20 bg-rose-500/5 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.2em]">
                    <span className="text-zinc-400">Sentinel / CI gate</span>
                    <span className="text-rose-300">● Merge blocked</span>
                  </div>

                  <div className="relative h-44 overflow-hidden border-b border-rose-300/20">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-top opacity-55 grayscale-[35%] transition duration-500 group-hover:scale-105 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130b0d] via-[#130b0d]/25 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-zinc-500">Baseline</p>
                        <p className="text-2xl text-white">100.0%</p>
                      </div>
                      <span className="pb-1 text-rose-300">→</span>
                      <div className="text-right">
                        <p className="text-[9px] uppercase tracking-widest text-zinc-500">Candidate</p>
                        <p className="text-3xl text-rose-300">62.5%</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 flex items-center justify-between border-b border-rose-300/15 pb-4 font-mono text-[10px] uppercase tracking-wider">
                      <span className="text-rose-300">3 new failures</span>
                      <span className="text-zinc-500">2 critical</span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
                    <p className="body-text my-4 text-sm leading-6">{project.description}</p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="border border-rose-300/20 bg-rose-500/5 px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-rose-100/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex border-t border-rose-300/15 pt-4 text-xs uppercase tracking-wider">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-zinc-400 transition hover:text-white"
                      >
                        GitHub ↗
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-rose-300 transition hover:text-white"
                        >
                          Inspect report ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <div
                key={project.title}
                className="elias-card group overflow-hidden rounded-lg flex flex-col transition hover:border-[#00f5a0] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
              >
                <div className="relative h-48 overflow-hidden border-b border-zinc-800 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
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
            );
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-light mb-8 leading-[1.05] tracking-[-0.04em]">
              Let&apos;s build the
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

      <BaxAI />
    </main>
  );
}
