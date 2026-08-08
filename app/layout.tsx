import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/inter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Julian Bartlett | Software Engineer",
    template: "%s | Julian Bartlett",
  },
  description:
    "Julian Bartlett's software engineering portfolio featuring full-stack, AI, cloud, security, and computer-vision projects.",
  applicationName: "Julian Bartlett Portfolio",
  authors: [{ name: "Julian Bartlett" }],
  creator: "Julian Bartlett",
  openGraph: {
    title: "Julian Bartlett | Software Engineer",
    description:
      "Full-stack, AI, cloud, security, and computer-vision projects built by Julian Bartlett.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
