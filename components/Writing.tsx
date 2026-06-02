import { getSubstackPosts } from '@/lib/substack';

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default async function Writing() {
  const posts = await getSubstackPosts();

  return (
    <section id="writing" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="section-label">Writing</span>
            <div className="section-divider" style={{ flex: 1 }} />
            <a
              href="https://vishanthashok.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                color: 'var(--accent3)',
                textDecoration: 'none',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              All posts ↗
            </a>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            From the Blog
          </h2>
        </div>

        {posts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {posts.map((p) => (
              <a
                key={p.link}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ padding: '22px 22px 20px', textDecoration: 'none', display: 'block' }}
              >
                <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: 10 }}>
                  {formatDate(p.pubDate)}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: 10, lineHeight: 1.4 }}>
                  {p.title}
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted2)', lineHeight: 1.6, margin: '0 0 16px' }}>
                  {p.description}
                </p>
                <span style={{ fontSize: 12, color: 'var(--accent3)', fontWeight: 600 }}>Read →</span>
              </a>
            ))}
          </div>
        ) : (
          /* Fallback */
          <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
            <p style={{ color: 'var(--muted2)', marginBottom: 16, fontSize: 14 }}>
              Writing on finance, technology, and product thinking.
            </p>
            <a
              href="https://vishanthashok.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Substack ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
