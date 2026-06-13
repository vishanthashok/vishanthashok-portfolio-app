import { getSubstackPosts } from '@/lib/substack';
import { WRITING_FALLBACK } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';

function formatDate(pubDate: string) {
  if (!pubDate) return null;
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default async function Writing() {
  const livePosts = await getSubstackPosts();
  const posts = livePosts.length > 0 ? livePosts.slice(0, 3) : WRITING_FALLBACK;

  return (
    <section id="writing" className="scroll-mt-24">
      <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>{'// Substack'}</SectionLabel>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post) => {
            const date = formatDate(post.pubDate);
            return (
              <a
                key={post.title}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-edge bg-surface p-6 transition-colors hover:border-accent/40"
              >
                {date && <p className="font-mono text-[11px] text-mute">{date}</p>}
                <h3 className="mt-2 font-display text-lg font-semibold text-fg group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{post.description}</p>
                <p className="mt-5 font-mono text-xs text-accent">Read on Substack ↗</p>
              </a>
            );
          })}
        </div>

        <a
          href="https://vishanthashok.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-xl border border-accent/25 bg-surface p-6 transition-colors hover:border-accent/50 md:flex md:items-center md:justify-between"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-accent">SERIES</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-fg">
              Debt-Fueled Growth Models
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">
              A Substack series on leverage-dependent business strategies.
            </p>
          </div>
          <span className="mt-4 inline-block font-mono text-xs text-accent md:mt-0">
            Follow the series ↗
          </span>
        </a>
      </Reveal>
    </section>
  );
}
