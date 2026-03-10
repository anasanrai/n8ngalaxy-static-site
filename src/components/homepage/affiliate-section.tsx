
import GlowButton from "@/components/ui/GlowButton";

export function AffiliateSection() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text">
          Join Our Affiliate Program
        </h2>
        <p className="mt-4 text-lg text-subtext">
          Earn 30% commission on every sale you refer. Help us grow the n8n community and get rewarded.
        </p>
        <div className="mt-8">
          <GlowButton>Join Now →</GlowButton>
        </div>
      </div>
    </div>
  );
}
