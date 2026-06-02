'use client';
import { PROJECTS, STACK_ICONS } from '@/lib/data';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Venture &amp; Product Portfolio</span>
            <div className="section-divider" style={{ flex: 1 }} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            What I&apos;ve Built
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="card"
              style={{ padding: '28px 28px 24px', position: 'relative', overflow: 'hidden' }}
            >
              {/* accent top gradient line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: `linear-gradient(90deg, transparent 5%, ${p.accent}60 40%, ${p.accent}60 60%, transparent 95%)`,
                }}
              />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  {/* dot + name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: '50%',
                        background: p.accent,
                        boxShadow: `0 0 12px ${p.accent}`,
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', margin: 0 }}>
                      {p.name}
                    </h3>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--muted2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                    {p.description}
                  </p>

                  {/* Stack tags with devicon */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.stack.map((s) => {
                      const icon = STACK_ICONS[s];
                      return (
                        <span key={s} className="tag">
                          {icon && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={`${DEVICON_BASE}/${icon}.svg`}
                              alt=""
                              width={12}
                              height={12}
                              loading="lazy"
                              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                              style={{ width: 12, height: 12, objectFit: 'contain', opacity: 0.7, flexShrink: 0 }}
                            />
                          )}
                          {s}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* View link */}
                <a
                  href={p.link || '#'}
                  style={{
                    fontSize: 12,
                    color: p.accent,
                    textDecoration: 'none',
                    fontWeight: 600,
                    padding: '6px 14px',
                    border: `1px solid ${p.accent}30`,
                    borderRadius: 7,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    transition: 'background 0.2s, border-color 0.2s',
                    flexShrink: 0,
                    background: `${p.accent}08`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${p.accent}18`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${p.accent}08`; }}
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
