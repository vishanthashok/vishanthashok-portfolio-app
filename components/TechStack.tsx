'use client';
import { TECH_STACK } from '@/lib/data';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export default function TechStack() {
  return (
    <section id="stack" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Tech Stack</span>
            <div className="section-divider" style={{ flex: 1 }} />
            <span
              style={{
                fontSize: 10,
                padding: '3px 10px',
                borderRadius: 20,
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.18)',
                color: 'var(--accent3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                fontWeight: 700,
              }}
            >
              {TECH_STACK.length} tools
            </span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Languages &amp; Tools
          </h2>
        </div>

        {/* Horizontal pill grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          {TECH_STACK.map((item) => (
            <div
              key={item.name}
              className="tag"
              style={{
                padding: '7px 14px',
                fontSize: 12,
                gap: 8,
                borderRadius: 8,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                color: 'var(--muted2)',
                cursor: 'default',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${DEVICON_BASE}/${item.devicon}.svg`}
                alt=""
                width={16}
                height={16}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
                style={{ width: 16, height: 16, objectFit: 'contain', opacity: 0.75, flexShrink: 0 }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
