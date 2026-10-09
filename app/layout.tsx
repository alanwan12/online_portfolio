import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { portfolio } from "@/config/portfolio";

// Figtree variable font, self-hosted (from @fontsource-variable/figtree) so
// builds never depend on reaching Google Fonts.
const figtree = localFont({
  src: "./fonts/figtree.woff2",
  variable: "--font-figtree",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolio.name} | Computer Science & Engineering`,
  description: portfolio.bio[0]
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\[\[(.*?)\]\]/g, "$1"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${figtree.variable}`}>
      <head>
        {/* Runs before first paint — removes dark class if user previously chose light */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-black antialiased dark:bg-[#111010] dark:text-white">
        {children}
      </body>
    </html>
  );
}
