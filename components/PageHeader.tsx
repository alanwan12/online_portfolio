import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { portfolio } from "@/config/portfolio";

export function PageHeader() {
  const { name, headshot, location } = portfolio;

  return (
    <header className="flex items-start justify-between gap-4 pt-10 pb-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
        <Image
          src={headshot}
          alt={`Portrait of ${name}`}
          width={528}
          height={652}
          priority
          sizes="(min-width: 640px) 208px, 160px"
          className="h-auto w-40 shrink-0 rounded-2xl border border-[#d4d4d8] object-cover shadow-sm sm:w-52 dark:border-[#27272a]"
        />
        <div>
          <h1 className="text-3xl font-bold text-black underline underline-offset-4 decoration-[#aaa] sm:text-4xl dark:text-white dark:decoration-[#444]">
            Hi, I&apos;m {name}
          </h1>
          <p className="mt-2 text-sm text-[#888]">
            Computer Science &amp; Engineering at UCLA &middot; {location}
          </p>
        </div>
      </div>
      <div className="mt-0.5 shrink-0">
        <ThemeToggle />
      </div>
    </header>
  );
}
