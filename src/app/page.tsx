import GlowCard from "@/components/ui/GlowCard"
import GlowButton from "@/components/ui/GlowButton"
import StarField from "@/components/ui/StarField"
import NebulaBlob from "@/components/ui/NebulaBlob"

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <StarField />
      </div>
      <NebulaBlob />
      <section className="glass p-8 mt-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full border border-[color:var(--border)] text-[13px] text-[color:var(--subtext)]">
          🌌 The #1 n8n Template Marketplace
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Automate Everything. <span className="text-[color:var(--highlight)]">Launch in Minutes.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-[color:var(--subtext)]">
          500+ battle‑tested n8n workflows for every industry. Buy once, use forever.
        </p>
        <div className="mt-5 flex gap-3 flex-wrap">
          <GlowButton>Explore Templates →</GlowButton>
          <button className="px-4 py-2 rounded-lg border border-[color:var(--border)]">Watch 2‑min Demo</button>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
          <GlowCard className="text-center">
            <div className="font-bold">🌟 7</div>
            <div className="text-[color:var(--subtext)]">Templates</div>
          </GlowCard>
          <GlowCard className="text-center">
            <div className="font-bold">👥 0</div>
            <div className="text-[color:var(--subtext)]">Members</div>
          </GlowCard>
          <GlowCard className="text-center">
            <div className="font-bold">⚡ 500+</div>
            <div className="text-[color:var(--subtext)]">Nodes</div>
          </GlowCard>
        </div>
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <GlowCard>
          <h2 className="text-xl font-semibold">Explore by Industry</h2>
          <p className="text-[color:var(--subtext)]">Real Estate, E‑commerce, Medical, Restaurant, Finance, Custom</p>
        </GlowCard>
        <GlowCard>
          <h2 className="text-xl font-semibold">Most Popular Templates</h2>
          <p className="text-[color:var(--subtext)]">Trusted by automation builders worldwide</p>
        </GlowCard>
      </section>
    </div>
  )
}
