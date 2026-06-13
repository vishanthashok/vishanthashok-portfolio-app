import { EXPERIENCE } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>{'// Experience'}</SectionLabel>
        <div className="mt-8 border-l border-edge">
          {EXPERIENCE.map((entry) => (
            <div key={entry.company} className="relative pb-12 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute top-2 -left-[3.5px] h-[7px] w-[7px] rounded-full bg-mint"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-fg">{entry.company}</h3>
                <p className="font-mono text-xs text-mute">{entry.date}</p>
              </div>
              <p className="mt-1 text-sm text-mute">{entry.role}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg/70">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
