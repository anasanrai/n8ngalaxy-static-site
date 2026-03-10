export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-black/20">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 flex items-center justify-between text-[14px] text-[color:var(--subtext)]">
        <span>© {new Date().getFullYear()} n8nGalaxy</span>
        <div className="flex gap-4">
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
