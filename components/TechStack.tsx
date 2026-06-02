'use client';
import { TECH_STACK } from '@/lib/data';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export default function TechStack() {
  return (
    <section id="stack" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Tech Stack</span>
            <div className="section-divider" style={{ flex: 1 }} />
            <span
              style={{
                fontSize: 10,
                padding: '3px 8px',
                borderRadius: 4,
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: 'var(--accent3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {TECH_STACK.length} tools
            </span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Languages &amp; Tools
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(76px, 1fr))',
            gap: 8,
          }}
        >
          {TECH_STACK.map((item) => (
            <div
              key={item.name}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 7,
                padding: '14px 8px',
                cursor: 'default',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${DEVICON_BASE}/${item.devicon}.svg`}
                alt={item.label}
                width={26}
                height={26}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.3'; }}
                style={{ width: 26, height: 26, objectFit: 'contain' }}
              />
              <span style={{ fontSize: 9, color: 'var(--muted2)', textAlign: 'center', letterSpacing: '0.03em' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
