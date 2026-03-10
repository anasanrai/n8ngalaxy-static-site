
import GlowButton from "@/components/ui/GlowButton";

export function SellSection() {
  return (
    <div className="py-20 bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text">
          Sell Your n8n Workflows
        </h2>
        <p className="mt-4 text-lg text-subtext">
          Join our community of creators and earn 80% on every sale. We handle the marketing, payments, and support, so you can focus on building.
        </p>
        <div className="mt-8">
          <GlowButton>Become a Seller →</GlowButton>
        </div>
      </div>
    </div>
  );
}
