import Image from 'next/image';

const metrics = [
  { value: '3', label: 'Products Built' },
  { value: "May '28", label: 'Graduation' },
  { value: '● Open', label: 'PM / Strategy' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)',
          bottom: '20%',
          right: '5%',
        }}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px', width: '100%', position: 'relative' }}>
        {/* Two-column: text left, photo right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
          {/* Left */}
          <div style={{ flex: 1, minWidth: 280 }}>
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
              <span className="section-label">Product · Strategy · Finance</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(42px, 6vw, 72px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                marginBottom: 24,
                color: 'var(--text)',
              }}
            >
              Vishanth{' '}
              <span className="gradient-text">/ Ashok.</span>
            </h1>

            {/* Subheadline */}
            <p style={{ fontSize: 16, color: 'var(--muted2)', maxWidth: 520, marginBottom: 32, lineHeight: 1.7 }}>
              Sophomore at UT Austin building at the intersection of finance and technology.
              I ship products &amp; translate complexity into clarity.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#contact" className="btn-primary">
                Get in touch ↗
              </a>
              <a
                href="https://linkedin.com/in/vishanth-ashok"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/vishanthashok"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://vishanthashok.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Substack
              </a>
            </div>

            {/* Metrics bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                overflow: 'hidden',
                maxWidth: 520,
              }}
            >
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  style={{
                    padding: '16px 12px',
                    textAlign: 'center',
                    borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: i === 2 ? 'var(--green)' : 'var(--text)',
                      marginBottom: 2,
                    }}
                  >
                    {m.value}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile photo */}
          <div style={{ flexShrink: 0, position: 'relative' }}>
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                border: '2px solid var(--border2)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 0 60px rgba(99,102,241,0.15)',
              }}
            >
              <Image
                src="/vishanth.jpg"
                alt="Vishanth Ashok"
                width={280}
                height={280}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
              />
            </div>
            {/* accent ring */}
            <div
              style={{
                position: 'absolute',
                inset: -6,
                borderRadius: '50%',
                border: '1px solid rgba(99,102,241,0.2)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #hero > div > div {
            flex-direction: column-reverse !important;
            align-items: center !important;
            text-align: center;
          }
          #hero [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
            max-width: 100% !important;
          }
          #hero [style*="grid-template-columns: repeat(4"] > div:nth-child(2) {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
          }
          #hero [style*="grid-template-columns: repeat(4"] > div:nth-child(1) {
            border-bottom: 1px solid var(--border);
          }
        }
      `}</style>
    </section>
  );
}
