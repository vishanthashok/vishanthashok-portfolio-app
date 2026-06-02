'use client';
import { EXPERIENCE } from '@/lib/data';

/* Styled initial avatars for private firms */
const COMPANY_STYLES: Record<string, { initials: string; bg: string; fg: string }> = {
  'Logan Growth Advisors': { initials: 'LG', bg: 'rgba(245,158,11,0.12)', fg: '#f59e0b' },
  'Evermount Partners':    { initials: 'EP', bg: 'rgba(34,211,238,0.1)',  fg: '#22d3ee' },
  'PNTHR Funds LP':        { initials: 'PF', bg: 'rgba(167,139,250,0.1)', fg: '#a78bfa' },
  'Fund Launch Partners':  { initials: 'FL', bg: 'rgba(129,140,248,0.1)', fg: '#818cf8' },
};

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Experience</span>
            <div className="section-divider" style={{ flex: 1 }} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Where I&apos;ve Worked
          </h2>
        </div>

        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {EXPERIENCE.map((e, i) => {
            const avatar = COMPANY_STYLES[e.company];
            return (
              <div
                key={e.company}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: 0,
                  borderBottom: i < EXPERIENCE.length - 1 ? '1px solid var(--border)' : 'none',
                  transition: 'background 0.18s',
                  background: 'var(--bg2)',
                }}
                onMouseEnter={(el) => { (el.currentTarget as HTMLDivElement).style.background = 'var(--bg3)'; }}
                onMouseLeave={(el) => { (el.currentTarget as HTMLDivElement).style.background = 'var(--bg2)'; }}
              >
                {/* Date column */}
                <div
                  style={{
                    padding: '26px 16px',
                    borderRight: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.5 }}>
                    {e.date}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '22px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  {/* Logo avatar */}
                  {avatar && (
                    <div
                      className="company-avatar"
                      style={{
                        background: avatar.bg,
                        color: avatar.fg,
                        border: `1px solid ${avatar.fg}25`,
                        marginTop: 2,
                      }}
                    >
                      {avatar.initials}
                    </div>
                  )}

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: 4 }}>
                      {e.company}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <span style={{ fontSize: 11, color: e.color, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {e.role}
                      </span>
                      <span style={{ fontSize: 10, color: 'var(--muted)' }}>· {e.location}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {e.bullets.map((b) => (
                        <li key={b} style={{ fontSize: 13, color: 'var(--muted2)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <span style={{ color: e.color, flexShrink: 0, marginTop: 1, fontSize: 11 }}>↗</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
