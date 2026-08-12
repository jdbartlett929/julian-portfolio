import BaxAI from "@/components/BaxAI";
import Navbar from "@/components/Navbar";
import TechMarquee from "@/components/TechMarquee";
import Image from "next/image";

const projects = [
  {
    title: "AI World Cup Recap Generator",
    description: "An interactive sports storytelling tool that creates team or player recaps with key statistics, defining moments, and a highlight-editing pipeline design.",
    tech: ["Next.js", "Sports API", "OpenAI", "Whisper", "FFmpeg"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/world-cup-recap",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "AI Apartment Hunter",
    description: "A ranked apartment-search dashboard that compares realistic listings against budget, neighborhood priorities, commute, and potential red flags.",
    tech: ["Next.js", "PostgreSQL", "Maps API", "OpenAI"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/apartment-hunter",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "AI Spending Analyzer",
    description: "A financial analysis workflow that identifies recurring subscriptions, spending patterns, and practical monthly savings opportunities.",
    tech: ["Python", "React", "PostgreSQL", "OpenAI"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/spending-analyzer",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "AI Closet & Outfit Planner",
    description: "A weather-aware digital closet that creates outfits while resurfacing clothes that have not been worn recently.",
    tech: ["React Native", "Vision API", "Weather API", "Supabase"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/outfit-planner",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "AI Job Search Agent",
    description: "A recruiter-ready agent workflow that matches a resume to relevant openings, explains fit, and organizes application deadlines.",
    tech: ["Python", "Browserbase", "OpenAI", "PostgreSQL"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/job-search-agent",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "AI GitHub Issue Agent",
    description: "An engineering agent that traces an issue through a repository, locates relevant files, proposes a fix, and prepares draft-PR checks.",
    tech: ["GitHub API", "Python", "OpenAI", "Docker"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/github-issue-agent",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "Personal MCP Assistant",
    description: "A context-aware assistant that combines calendar and notes information through a transparent MCP-style tool workflow.",
    tech: ["TypeScript", "MCP SDK", "OpenAI", "PostgreSQL"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/personal-mcp-assistant",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "Real-Time AI Interview Coach",
    description: "A voice-interview practice experience with adaptive follow-up questions, structured feedback, and a live communication scorecard.",
    tech: ["Realtime API", "WebRTC", "React", "FastAPI"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/interview-coach",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "Secondhand Shopping Search",
    description: "A visual resale discovery workflow that ranks similar secondhand listings by appearance, condition, and value.",
    tech: ["React Native", "Embeddings", "Vector DB", "Marketplace API"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/secondhand-search",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "AI Travel Planner",
    description: "A complete trip builder with budget allocation, restaurants, places to visit, and a saved day-by-day itinerary.",
    tech: ["Next.js", "OpenAI", "Maps API"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/travel-planner",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "Campus Study Spot Finder",
    description: "A student-focused campus search tool ranking study spaces by noise, Wi-Fi, outlets, crowd level, and hours.",
    tech: ["Next.js", "Maps API", "PostgreSQL"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/study-spot-finder",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "Habit Garden",
    description: "A habit tracker where daily completions grow a virtual garden, preserve streaks, and unlock new plants.",
    tech: ["Next.js", "PostgreSQL"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/habit-garden",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "Concert & Festival Finder",
    description: "A personalized live-events discovery tool with followed artists, saved shows, pricing, and calendar-ready plans.",
    tech: ["React", "Ticketmaster API", "Firebase"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/concert-finder",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "Coffee Shop Finder",
    description: "A café search experience with practical filters for Wi-Fi, outlets, noise, seating, distance, and reviews.",
    tech: ["Next.js", "Maps API", "PostgreSQL"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/coffee-finder",
    image: "/project-images/ai-product-lab.png",
  },
  {
    title: "Hiking Trail Explorer",
    description: "A trail discovery dashboard with difficulty, elevation, weather, saved hikes, and progress tracking.",
    tech: ["React", "Hiking API", "Firebase"],
    github: "https://github.com/jdbartlett929/ai-product-lab",
    live: "https://ai-product-lab-psi.vercel.app/projects/trail-explorer",
    image: "/project-images/ai-product-lab.png",
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

const badgeColors = ["#00f5a0", "#60a5fa", "#fbbf24", "#f472b6", "#a78bfa", "#22d3ee"];

function projectBadge(title: string) {
  const words = title.replace(/AI|Real-Time/gi, "").trim().split(/\s+/);
  const mark = words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  const color = badgeColors[title.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) % badgeColors.length];
  return { mark: mark || "JB", color };
}

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
                <div
                  className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl border bg-black/80 text-xs font-bold shadow-lg backdrop-blur"
                  style={{ borderColor: projectBadge(project.title).color, color: projectBadge(project.title).color }}
                  aria-label={`${project.title} custom logo`}
                >
                  {projectBadge(project.title).mark}
                </div>
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
