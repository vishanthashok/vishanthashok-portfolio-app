import { SOCIALS, EMAIL } from '@/lib/data';

const STATS = [
  { value: '3', label: 'PRODUCTS BUILT' },
  { value: "May '28", label: 'GRADUATION' },
  { value: 'Open', label: 'PM / STRATEGY', live: true },
];

export default function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <p className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
          Product · Strategy · Finance
        </p>

        <h1 className="mt-6 font-display text-6xl font-extrabold leading-[1.02] tracking-wide text-fg sm:text-7xl md:text-8xl">
          Vishanth&nbsp;<span className="text-edge">/</span>
          <br />
          <span className="shimmer">Ashok.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute">
          Sophomore at UT Austin building at the intersection of finance and technology. I ship
          products &amp; translate complexity into clarity.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-[6px] bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get in touch ↗
          </a>
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6px] border border-edge px-5 py-2.5 text-sm text-mute transition-colors hover:border-mint/40 hover:text-fg"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-edge bg-surface/60 px-4 py-3">
              <p className="flex items-center gap-2 font-display text-xl font-bold text-fg">
                {stat.live && <span className="h-2 w-2 rounded-full bg-mint" aria-hidden />}
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-mute">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
