import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export default function GlowButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props
  return (
    <button
      {...rest}
      className={cn(
        'px-4 py-2 rounded-lg border text-[14px] glow-border',
        'border-[color:var(--border)]',
        'bg-[linear-gradient(90deg,rgba(99,102,241,.3),rgba(168,85,247,.2))]',
        className
      )}
    />
  )
}
