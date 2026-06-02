export default function Contact() {
  return (
    <section id="contact" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Contact</span>
            <div className="section-divider" style={{ flex: 1 }} />
          </div>
        </div>

        {/* Centered glow card */}
        <div
          style={{
            maxWidth: 600,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Radial glow behind card */}
          <div
            style={{
              position: 'absolute',
              inset: -80,
              background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
              borderRadius: '50%',
            }}
          />
          <div
            className="card"
            style={{
              padding: '48px 40px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                marginBottom: 12,
              }}
            >
              Let&apos;s build something.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--muted2)', marginBottom: 32, lineHeight: 1.65 }}>
              Open to PM internships, strategy roles, and conversations about what you&apos;re working on.
            </p>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:vishanthashok@gmail.com" className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                vishanthashok@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/vishanth-ashok"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/vishanthashok"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub
              </a>
              <a
                href="https://vishanthashok.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Substack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
