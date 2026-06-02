export default function Resume() {
  return (
    <section id="resume" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Resume</span>
            <div className="section-divider" style={{ flex: 1 }} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Full Background
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Left: stylized resume preview */}
          <div
            className="card"
            style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {/* Paper mockup */}
            <div
              style={{
                background: '#f8f8f6',
                borderRadius: 6,
                padding: '24px 20px',
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a',
                minHeight: 320,
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>Vishanth Ashok</div>
              <div style={{ fontSize: 9, color: '#555', marginBottom: 12, borderBottom: '1px solid #ddd', paddingBottom: 8 }}>
                vishanthashok@gmail.com · linkedin.com/in/vishanth-ashok · Austin, TX
              </div>
              {/* Simulated text bars */}
              {[80, 60, 90, 45, 70, 55, 85, 40, 75, 50, 65].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: 7,
                    width: `${w}%`,
                    background: i % 4 === 0 ? '#999' : '#ddd',
                    borderRadius: 3,
                    marginBottom: 7,
                  }}
                />
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 10 }}>
              <a
                href="/Vishanth Ashok.pdf"
                download
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', fontSize: 12 }}
              >
                ↓ Download PDF
              </a>
              <a
                href="/Vishanth Ashok.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ flex: 1, justifyContent: 'center', fontSize: 12 }}
              >
                View Full ↗
              </a>
            </div>
          </div>

          {/* Right: info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Summary */}
            <div className="card" style={{ padding: '20px 22px' }}>
              <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                Summary
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted2)', lineHeight: 1.65, margin: 0 }}>
                Economics sophomore at UT Austin with minors in CS and Entrepreneurship. I blend financial modeling with product thinking — having shipped AI-powered tools and led investment analysis across private equity, venture, and strategy roles.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="card" style={{ padding: '20px 22px' }}>
              <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                Key Highlights
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  '3 shipped products across AI, geospatial, and productivity',
                  '4 internships across PE, VC, and strategy',
                  'Python automation cutting research time by 23%',
                  '$20mm+ in deal exposure across LBO transactions',
                  'Open to PM internships and strategy roles',
                ].map((h) => (
                  <li key={h} style={{ fontSize: 13, color: 'var(--muted2)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent2)', flexShrink: 0 }}>◆</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="card" style={{ padding: '20px 22px' }}>
              <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                Education
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>
                University of Texas at Austin
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted2)', marginBottom: 3 }}>
                B.S. Economics · Minor in CS &amp; Entrepreneurship
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', display: 'flex', gap: 12 }}>
                <span>Expected May 2028</span>
                <span>·</span>
                <span>SAT 1490</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #resume [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
