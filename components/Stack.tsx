import { TECH_STACK } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24">
      <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>{'// Tools & Technologies'}</SectionLabel>
        <div className="mt-8 flex flex-wrap gap-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/25 bg-surface px-4 py-1.5 font-mono text-sm text-fg/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
