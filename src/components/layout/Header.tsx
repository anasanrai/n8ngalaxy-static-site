import Link from 'next/link'
import GlowButton from '@/components/ui/GlowButton'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-black/30 backdrop-blur-md">
      <div className="mx-auto w-full max-w-5xl px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="font-bold tracking-tight flex items-center gap-2">
          <span>n8nGalaxy</span>
          <span className="w-2 h-2 rounded-full bg-[color:var(--primary)]" />
        </Link>
        <nav className="flex items-center gap-2 text-[14px]">
          <Link href="/templates" className="px-3 py-2 rounded-lg hover:underline">Templates</Link>
          <Link href="/categories" className="px-3 py-2 rounded-lg hover:underline">Categories</Link>
          <Link href="/sell" className="px-3 py-2 rounded-lg hover:underline">Sell</Link>
          <Link href="/blog" className="px-3 py-2 rounded-lg hover:underline">Blog</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="px-3 py-2 rounded-lg border border-[color:var(--border)]">Login</Link>
          <GlowButton>Get Started</GlowButton>
        </div>
      </div>
    </header>
  )
}
