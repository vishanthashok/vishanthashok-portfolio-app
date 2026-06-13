export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-mute">
        <p>© {new Date().getFullYear()} Vishanth Ashok</p>
        <p>Austin, TX</p>
      </div>
    </footer>
  );
}
