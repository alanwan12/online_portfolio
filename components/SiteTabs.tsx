"use client";

import { useEffect, useState } from "react";
import { Bio } from "@/components/Bio";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Honors } from "@/components/Honors";
import { Career } from "@/components/Career";

const TABS = [
  { id: "about", label: "About" },
  { id: "story", label: "Story" },
  { id: "projects", label: "Projects" },
  { id: "honors", label: "Honors" },
  { id: "career", label: "Career" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function isTab(v: string): v is TabId {
  return TABS.some((t) => t.id === v);
}

export function SiteTabs() {
  const [active, setActive] = useState<TabId>("about");

  // Open the tab named in the URL hash (e.g. /#projects), and follow hash changes.
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (isTab(h)) setActive(h);
    };
    const onHashChange = () => {
      fromHash();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    fromHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const select = (id: TabId) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="sticky top-0 z-10 -mx-6 border-y border-[#e4e4e7] bg-white/90 px-6 backdrop-blur sm:-mx-10 sm:px-10 dark:border-[#1e1e1e] dark:bg-[#111010]/90">
        <div
          role="tablist"
          aria-label="Sections"
          className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]"
        >
          {TABS.map((t) => {
            const on = active === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                type="button"
                id={`tab-${t.id}`}
                aria-selected={on}
                aria-controls={`panel-${t.id}`}
                onClick={() => select(t.id)}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  on
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-[#666] hover:bg-[#f0f0f0] hover:text-black dark:text-[#888] dark:hover:bg-[#1a1a1a] dark:hover:text-white"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="[&>section:first-child]:border-t-0">
        {active === "about" && (
          <>
            <Bio />
            <TechStack />
          </>
        )}
        {active === "story" && <Experience />}
        {active === "projects" && <Projects />}
        {active === "honors" && <Honors />}
        {active === "career" && <Career />}
      </div>
    </>
  );
}
