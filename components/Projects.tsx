'use client';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Venture &amp; Product Portfolio</span>
            <div className="section-divider" style={{ flex: 1 }} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            What I&apos;ve Built
          </h2>
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="card"
              style={{ padding: '28px 28px 24px', position: 'relative', overflow: 'hidden' }}
            >
              {/* accent top border on hover via pseudo — use inline gradient */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
                  opacity: 0.6,
                }}
              />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  {/* dot + name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: p.accent,
                        boxShadow: `0 0 10px ${p.accent}`,
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', margin: 0 }}>
                      {p.name}
                    </h3>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--muted2)', marginBottom: 16, lineHeight: 1.65, margin: '0 0 16px' }}>
                    {p.description}
                  </p>

                  {/* Stack tags with icon prefix placeholder */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
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
                    border: `1px solid ${p.accent}33`,
                    borderRadius: 6,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    transition: 'background 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${p.accent}15`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
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
