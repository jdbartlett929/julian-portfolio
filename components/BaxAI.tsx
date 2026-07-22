"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

const quickQuestions = [
  "Who is Julian?",
  "What projects has he built?",
  "Tell me about FileGuard Pro",
  "Tell me about StreamVault",
  "What skills does Julian have?",
  "How can I contact him?",
];

function getBaxAIResponse(input: string) {
  const message = input.toLowerCase();

  if (
    message.includes("who") ||
    message.includes("julian") ||
    message.includes("about you") ||
    message.includes("about him")
  ) {
    return "Julian Bartlett is a developer focused on building practical software projects, cybersecurity tools, dashboards, and full-stack web applications. His portfolio includes projects built with Java, Next.js, TypeScript, Tailwind CSS, Supabase, GitHub, and Vercel.";
  }

  if (
    message.includes("project") ||
    message.includes("built") ||
    message.includes("portfolio")
  ) {
    return "Julian has built CareerPilot, FileGuard Pro, StreamVault, DevBoard, and Task Tracker. These projects show full-stack development, cybersecurity, dashboards, authentication, databases, UI design, and deployment experience.";
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
    return "CareerPilot is a full-stack career tracking app built with Next.js, Tailwind CSS, and Supabase. It includes authentication, a protected dashboard, application tracking, and resume keyword analysis features.";
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
    return "Task Tracker is a productivity app that lets users manage tasks through a clean interface. It demonstrates Julian’s ability to build CRUD features, manage state, and create useful web applications.";
  }

  if (
    message.includes("skill") ||
    message.includes("tech") ||
    message.includes("language") ||
    message.includes("tools")
  ) {
    return "Julian’s technical skills include Java, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Supabase, SQL basics, Git, GitHub, Vercel, VS Code, Java Swing, file I/O, SHA-256 hashing, and responsive UI development.";
  }

  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("hire") ||
    message.includes("reach")
  ) {
    return "You can contact Julian through the contact section on this portfolio or view his work on GitHub at github.com/jdbartlett929.";
  }

  if (
    message.includes("internship") ||
    message.includes("work") ||
    message.includes("experience")
  ) {
    return "Julian is interested in software development, cybersecurity, technical problem solving, dashboards, full-stack development, and practical engineering projects. His portfolio shows hands-on experience building and deploying real applications.";
  }

  return "I can answer questions about Julian’s projects, technical skills, experience, GitHub, portfolio, and contact information. Try asking about FileGuard Pro, StreamVault, CareerPilot, DevBoard, or his coding skills.";
}

export default function BaxAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey, I’m Bax AI. Ask me about Julian’s projects, skills, experience, or contact info.",
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
        text: "Chat reset. Ask me about Julian’s projects, skills, experience, or contact info.",
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
                  Portfolio Assistant • Online
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
