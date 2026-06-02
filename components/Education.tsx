const courses = ['Machine Learning', 'Databases', 'Data Science', 'Energy Economics', 'Linear Algebra', 'Statistics', 'Discrete Math'];

export default function Education() {
  return (
    <section id="education" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Education</span>
            <div className="section-divider" style={{ flex: 1 }} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Academic Background
          </h2>
        </div>

        <div className="card" style={{ padding: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'start', flexWrap: 'wrap' }}>
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                {/* UT Austin shield placeholder */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'linear-gradient(135deg, #bf5700, #d4700a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 800,
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  UT
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    University of Texas at Austin
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted2)' }}>
                    B.S. Economics · Minor in CS &amp; Entrepreneurship
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 20, marginBottom: 20, marginTop: 16 }}>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>Expected</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>May 2028</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>SAT</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>1490</div>
                </div>
              </div>

              {/* Involvement */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Involvement
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['TAMID Finance', 'KBH Energy Center SAC'].map((org) => (
                    <span
                      key={org}
                      style={{
                        fontSize: 12,
                        padding: '4px 12px',
                        borderRadius: 20,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border2)',
                        color: 'var(--muted2)',
                      }}
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>

              {/* Courses */}
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Relevant Courses
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {courses.map((c) => (
                    <span key={c} className="tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: scholarship box */}
            <div
              style={{
                background: 'rgba(245, 158, 11, 0.06)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: 10,
                padding: '20px 24px',
                minWidth: 200,
              }}
            >
              <div style={{ fontSize: 10, color: 'var(--amber)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8, fontWeight: 600 }}>
                Scholarship
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 4 }}>
                $5,000
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted2)' }}>
                Texas Exes Scholarship
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>
                Merit award
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #education .card > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
