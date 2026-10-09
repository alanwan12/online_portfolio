import { portfolio } from "@/config/portfolio";

export function Career() {
  const { career } = portfolio;

  return (
    <section className="border-t border-[#e4e4e7] py-10 dark:border-[#1e1e1e]">
      <h2 className="mb-5 text-xl font-bold text-black dark:text-white">Career Exploration</h2>
      {career.intro.map((p, i) => (
        <p key={i} className="mb-6 text-sm leading-6 text-[#555] dark:text-[#888]">
          {p}
        </p>
      ))}
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#888] dark:text-[#555]">
        Guest speakers
      </p>
      <ul className="space-y-4">
        {career.speakers.map((sp) => (
          <li key={sp.name} className="text-sm leading-6 text-[#555] dark:text-[#888]">
            <span className="font-semibold text-black dark:text-white">{sp.name}</span>
            {" "}&middot; {sp.info} &middot; {sp.date}
            <br />
            {sp.note}
          </li>
        ))}
      </ul>
    </section>
  );
}
