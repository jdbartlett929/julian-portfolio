"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

const quickQuestions = [
  "Who is Julian?",
  "Which project should I view first?",
  "Tell me about Aegis",
  "What AWS experience does he have?",
  "What skills does Julian have?",
  "Why should we interview him?",
];

function getBaxAIResponse(input: string) {
  const message = input.toLowerCase();

  if (
    message.includes("view first") ||
    message.includes("best project") ||
    message.includes("strongest project") ||
    message.includes("recommend")
  ) {
    return "Start with Aegis Command for voice interfaces and automation, CloudQueue for AWS architecture, and FileGuard Pro for Java and cybersecurity. Together, they show Julian can design polished interfaces, build practical logic, document architecture, test his work, and ship production deployments.";
  }

  if (
    message.includes("who is julian") ||
    message.includes("tell me about julian") ||
    message.includes("about you") ||
    message.includes("about him")
  ) {
    return "Julian Bartlett is a Computer Science student and developer focused on practical software, cloud architecture, automation, cybersecurity, and polished web applications. He builds complete projects, verifies them, documents the decisions, and deploys them publicly through GitHub and Vercel.";
  }

  if (
    message.includes("project") ||
    message.includes("built") ||
    message.includes("portfolio")
  ) {
    return "Julian’s portfolio includes Aegis Command, Atlas Agent, CloudQueue, Online Voting System, CareerPilot, FileGuard Pro, StreamVault, DevBoard, Task Tracker, and his personal portfolio. The work covers voice interfaces, browser automation, AWS serverless architecture, cybersecurity, analytics, state management, responsive UI, and production deployment.";
  }

  if (
    message.includes("aegis") ||
    message.includes("voice assistant") ||
    message.includes("voice automation") ||
    message.includes("command center")
  ) {
    return "Aegis Command is Julian’s original cinematic voice assistant and automation command center. It supports browser speech recognition, spoken responses, timers, task execution, notes, briefings, decision analysis, telemetry, and 1,600 natural-language command variations—all without an API key.";
  }

  if (
    message.includes("atlas") ||
    message.includes("local agent") ||
    message.includes("ai agent")
  ) {
    return "Atlas Agent is a no-key browser-local assistant with conversational planning, summarization, calculations, deterministic code review, persistent chat history, and editable artifacts. Julian separated the command engine from the workspace UI so a server-side model provider could be added later.";
  }

  if (
    message.includes("cloudqueue") ||
    message.includes("cloud queue") ||
    message.includes("aws") ||
    message.includes("lambda") ||
    message.includes("serverless")
  ) {
    return "CloudQueue is Julian’s AWS serverless file-processing project. It models an event-driven S3 → SQS → Lambda → DynamoDB → CloudWatch pipeline and includes an AWS SAM infrastructure template, Python Lambda worker, queue monitoring, retry behavior, service health, and clear documentation about its simulated public data.";
  }

  if (
    message.includes("voting") ||
    message.includes("election") ||
    message.includes("civicpulse")
  ) {
    return "The Online Voting System is a clearly labeled fictional demonstration built with Next.js, TypeScript, React, Tailwind CSS, and LocalStorage. It includes four candidates, vote confirmation, one-vote-per-browser demo logic, live results, validation, accessible controls, and transparent warnings that it is not suitable for real elections.";
  }

  if (
    message.includes("fileguard") ||
    message.includes("file guard") ||
    message.includes("cyber") ||
    message.includes("security") ||
    message.includes("sha")
  ) {
    return "FileGuard Pro is Julian’s Java desktop cybersecurity tool. It creates SHA-256 file baselines, scans folders for tampering, detects modified, deleted, and newly added files, calculates risk levels, and exports security reports through a professional desktop dashboard.";
  }

  if (
    message.includes("streamvault") ||
    message.includes("stream") ||
    message.includes("netflix") ||
    message.includes("movie")
  ) {
    return "StreamVault is Julian’s Netflix-inspired streaming dashboard built with Next.js, TypeScript, React, and Tailwind CSS. It includes movie cover cards, a featured hero section, search, genre filtering, responsive design, and a watchlist feature.";
  }

  if (
    message.includes("careerpilot") ||
    message.includes("career") ||
    message.includes("resume") ||
    message.includes("job")
  ) {
    return "CareerPilot is an interactive career dashboard that opens directly for recruiters with no login barrier. Visitors can add applications, update pipeline stages, track interviews and offers, view response metrics, and use the resume keyword analyzer.";
  }

  if (
    message.includes("devboard") ||
    message.includes("dashboard") ||
    message.includes("github")
  ) {
    return "DevBoard is a developer analytics dashboard that highlights Julian’s frontend dashboard, UI, and data visualization skills.";
  }

  if (
    message.includes("task") ||
    message.includes("tracker") ||
    message.includes("tasks")
  ) {
    return "Task Tracker is an instant-access productivity demo where visitors can create, prioritize, filter, complete, reopen, and remove project tasks. It demonstrates state management, validation, accessible controls, and responsive product design without requiring an account.";
  }

  if (
    message.includes("skill") ||
    message.includes("tech") ||
    message.includes("language") ||
    message.includes("tools")
  ) {
    return "Julian’s technical toolkit includes Python, Java, JavaScript, TypeScript, React, Next.js, Tailwind CSS, AWS serverless services, AWS SAM, Git, GitHub, Vercel, Linux, Java Swing, file I/O, SHA-256 hashing, Web Speech APIs, LocalStorage, responsive design, accessibility, and browser-based testing.";
  }

  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("reach")
  ) {
    return "Julian can be reached at julbartl929@gmail.com. You can also use the contact section, view his work at github.com/jdbartlett929, or connect through the LinkedIn link on this portfolio.";
  }

  if (
    message.includes("why") ||
    message.includes("interview") ||
    message.includes("hire") ||
    message.includes("candidate")
  ) {
    return "Julian is worth interviewing because he consistently turns ideas into complete, public projects. His work shows breadth across web development, Java, cybersecurity, AWS architecture, automation, voice interfaces, testing, GitHub workflows, and deployment. He also explains limitations honestly and removes friction so reviewers can test each project immediately.";
  }

  if (
    message.includes("internship") ||
    message.includes("work") ||
    message.includes("experience")
  ) {
    return "Julian combines software projects with experience in technical troubleshooting, customer support, team leadership, and administrative operations. His Data Analyst internship work includes an AI and drone project focused on detecting humans in smoke and fire conditions. He is especially interested in software engineering, cloud systems, cybersecurity, automation, and technical problem-solving.";
  }

  return "I can help you evaluate Julian’s projects, AWS and automation experience, technical skills, professional background, GitHub work, and contact information. Try asking which project to view first, why you should interview him, or about Aegis, CloudQueue, Atlas, FileGuard Pro, or the voting demo.";
}

export default function BaxAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey, I’m Bax AI. I can help you explore Julian’s newest projects, AWS and automation work, technical skills, experience, and contact information.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  function sendMessage(text?: string) {
    const finalText = text ?? input;

    if (!finalText.trim()) return;

    const userMessage: Message = {
      role: "user",
      text: finalText,
    };

    const botMessage: Message = {
      role: "bot",
      text: getBaxAIResponse(finalText),
    };

    setMessages((current) => [...current, userMessage, botMessage]);
    setInput("");
    setIsOpen(true);
  }

  function clearChat() {
    setMessages([
      {
        role: "bot",
        text: "Chat reset. Ask which project to view first, what Julian knows about AWS, or why he would be a strong interview candidate.",
      },
    ]);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {isOpen && (
        <div className="mb-4 w-[350px] overflow-hidden rounded-3xl border border-[#00f5a0]/40 bg-zinc-950 shadow-2xl shadow-[#00f5a0]/20 sm:w-[420px]">
          <div className="border-b border-white/10 bg-gradient-to-r from-[#00f5a0]/20 via-cyan-500/20 to-blue-500/20 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-black text-white">Bax AI</h3>
                <p className="text-xs font-medium text-zinc-300">
                  Recruiter Portfolio Guide • Online
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  Reset
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  ×
                </button>
              </div>
            </div>
          </div>

          <div className="h-[360px] space-y-4 overflow-y-auto bg-black/40 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-[#00f5a0] text-black"
                      : "border border-white/10 bg-white/10 text-zinc-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 bg-zinc-950 p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-[#00f5a0]/70 hover:text-white"
                >
                  {question}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Bax AI..."
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#00f5a0]"
              />

              <button
                type="submit"
                className="rounded-xl bg-[#00f5a0] px-4 py-3 text-sm font-black text-black transition hover:bg-emerald-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((current) => !current)}
        className="group flex items-center gap-3 rounded-full border border-[#00f5a0]/50 bg-zinc-950 px-5 py-4 font-black text-white shadow-2xl shadow-[#00f5a0]/20 transition hover:-translate-y-1 hover:border-[#00f5a0]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00f5a0] to-cyan-400 text-black">
          AI
        </span>
        <span>Bax AI</span>
      </button>
    </div>
  );
}
