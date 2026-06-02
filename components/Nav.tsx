'use client';
import { useState } from 'react';

const links = ['Stack', 'Projects', 'Experience', 'Resume', 'Writing', 'Contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(7, 7, 15, 0.8)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 56, gap: 32 }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--accent2), var(--accent3))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.04em',
            }}
          >
            VA
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 24, flex: 1 }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: 13,
                color: 'var(--muted2)',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted2)')}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Open to roles pill */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: 20,
              padding: '5px 12px',
              fontSize: 12,
              color: 'var(--green)',
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--green)',
                display: 'inline-block',
                boxShadow: '0 0 6px var(--green)',
                animation: 'pulse 2s infinite',
              }}
            />
            Open to Roles
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--muted2)',
              cursor: 'pointer',
              padding: 4,
              display: 'none',
            }}
            className="show-mobile"
            aria-label="menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            padding: '12px 24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 0',
                fontSize: 14,
                color: 'var(--muted2)',
                textDecoration: 'none',
                fontWeight: 500,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
