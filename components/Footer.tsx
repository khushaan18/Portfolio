export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border bg-ink py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-text-faint sm:flex-row md:px-10">
        <p>© {new Date().getFullYear()} Khushaan Saini. Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        <p className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          status: open to opportunities
        </p>
      </div>
    </footer>
  );
}
