import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hugo Souza-Almeida | Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in DevOps, Data Engineering, and Web Development. Based in Belo Horizonte, Brazil.",
  keywords: [
    "full stack engineer",
    "devops",
    "data engineering",
    "python",
    "azure",
    "aws",
    "react",
    "nextjs",
    "web scraping",
  ],
  authors: [{ name: "Hugo Souza-Almeida" }],
  openGraph: {
    title: "Hugo Souza-Almeida | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in DevOps, Data Engineering, and Web Development.",
    type: "website",
    url: "https://hugos.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${jetbrainsMono.variable} antialiased font-mono bg-black text-green-400`}
      >
        {children}
      </body>
    </html>
  );
}
