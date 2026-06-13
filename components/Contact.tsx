import { SOCIALS, EMAIL } from '@/lib/data';
import Reveal from '@/components/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Reveal className="mx-auto max-w-6xl px-6 py-24 text-center md:py-36">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
          Let&apos;s build <span className="underline-accent italic">something.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-mute">
          Open to PM roles, energy IB, and early-stage ventures.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 inline-block rounded-[6px] bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          Get in touch ↗
        </a>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-mute">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
          <span className="text-fg/60">vishanthashok.app</span>
        </div>
      </Reveal>
    </section>
  );
}
