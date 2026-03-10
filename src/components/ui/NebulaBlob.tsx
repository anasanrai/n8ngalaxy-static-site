export default function NebulaBlob({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: '-160px auto auto -160px',
        width: '560px',
        height: '560px',
        background:
          'radial-gradient(560px 280px at 40% 40%, rgba(99,102,241,.3), transparent 60%), radial-gradient(560px 280px at 70% 30%, rgba(168,85,247,.22), transparent 60%)',
        filter: 'blur(10px)',
        pointerEvents: 'none',
      }}
    />
  )
}
