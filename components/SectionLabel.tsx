export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-mute uppercase">{children}</p>
  );
}
