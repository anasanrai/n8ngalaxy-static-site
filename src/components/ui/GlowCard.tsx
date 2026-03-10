import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export default function GlowCard({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('glass glow-border p-6', className)}>{children}</div>
}
