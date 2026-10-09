import { portfolio } from "@/config/portfolio";

export function Honors() {
  const { honors } = portfolio;

  return (
    <section className="border-t border-[#e4e4e7] py-10 dark:border-[#1e1e1e]">
      <h2 className="mb-5 text-xl font-bold text-black dark:text-white">Honors &amp; Awards</h2>
      <ul className="space-y-2">
        {honors.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm leading-6 text-[#555] dark:text-[#888]">
            <span className="mt-0.5 shrink-0">&bull;</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
