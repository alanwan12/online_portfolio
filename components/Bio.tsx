import { portfolio } from "@/config/portfolio";
import { Mail } from "lucide-react";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|\[\[.*?\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-black dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("[[") && part.endsWith("]]")) {
          return (
            <span key={i} className="tracking-[0.18em]">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return <Mail className={className} aria-hidden="true" />;
}

export function Bio() {
  const { bio, cta, social } = portfolio;

  const socialLinks = [
    { key: "email",    label: "Email",    href: social.email ? `mailto:${social.email}` : "", Icon: MailIcon },
    { key: "github",   label: "GitHub",   href: social.github,   Icon: GitHubIcon   },
    { key: "linkedin", label: "LinkedIn", href: social.linkedin, Icon: LinkedInIcon },
  ].filter((l) => l.href);

  return (
    <section className="space-y-4 py-6">
      {bio.map((paragraph, i) => (
        <p key={i} className="text-base leading-7 text-[#555] dark:text-[#888]">
          <RichText text={paragraph} />
        </p>
      ))}

      <p className="pt-1 text-base font-medium text-black dark:text-white">{cta}</p>

      <div className="flex flex-wrap gap-2.5 pt-1">
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          View my projects
        </a>
        {social.resume && (
          <a
            href={social.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#d4d4d8] px-4 py-2 text-sm font-medium text-[#555] transition-colors hover:border-[#888] hover:text-black dark:border-[#27272a] dark:text-[#a1a1aa] dark:hover:border-[#444] dark:hover:text-white"
          >
            View my resume
          </a>
        )}
      </div>

      {socialLinks.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {socialLinks.map(({ key, label, href, Icon }) => (
            <a
              key={key}
              href={href}
              {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-center gap-2 rounded-full border border-[#d4d4d8] bg-[#f5f5f5] px-4 py-2 text-sm text-[#555] transition-colors hover:border-[#888] hover:text-black dark:border-[#27272a] dark:bg-[#0f0f0f] dark:text-[#a1a1aa] dark:hover:border-[#444] dark:hover:text-white"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
