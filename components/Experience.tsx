'use client';
import { EXPERIENCE } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Experience</span>
            <div className="section-divider" style={{ flex: 1 }} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Where I&apos;ve Worked
          </h2>
        </div>

        {/* Stacked list */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.company}
              style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr',
                gap: 0,
                borderBottom: i < EXPERIENCE.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(el) => { (el.currentTarget as HTMLDivElement).style.background = 'var(--bg3)'; }}
              onMouseLeave={(el) => { (el.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
            >
              {/* Date column */}
              <div
                style={{
                  padding: '24px 16px',
                  borderRight: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  paddingTop: 28,
                }}
              >
                <span style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                  {e.date}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px 24px' }}>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    {e.company}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontSize: 11, color: e.color, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {e.role}
                  </span>
                  <span style={{ fontSize: 10, color: 'var(--muted)', marginLeft: 4 }}>· {e.location}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {e.bullets.map((b) => (
                    <li key={b} style={{ fontSize: 13, color: 'var(--muted2)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: e.color, flexShrink: 0, marginTop: 1 }}>↗</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
