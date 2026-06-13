import { PROJECTS } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>{'// Selected Work'}</SectionLabel>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-xl border border-edge bg-surface p-6"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <p className="font-mono text-[10px] tracking-[0.2em] text-mint">{project.tag}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-fg">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-edge bg-bg px-2.5 py-1 font-mono text-[11px] text-mute"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
