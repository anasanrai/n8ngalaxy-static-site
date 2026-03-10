import GlowButton from "@/components/ui/GlowButton";
import StarField from "@/components/ui/StarField";
import NebulaBlob from "@/components/ui/NebulaBlob";
import { CategoryGrid } from "@/components/homepage/category-grid";
import { FeaturedTemplates } from "@/components/homepage/featured-templates";
import { HowItWorks } from "@/components/homepage/how-it-works";
import { FreeTemplateCapture } from "@/components/homepage/free-template-capture";
import { SellSection } from "@/components/homepage/sell-section";
import { AffiliateSection } from "@/components/homepage/affiliate-section";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <StarField />
      </div>
      <NebulaBlob />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-4xl font-bold tracking-tight text-text md:text-6xl">
          Automate Everything. Launch in Minutes.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-subtext">
          500+ battle-tested n8n workflows for every industry. Buy once, use forever.
        </p>
        <div className="mt-8 flex gap-4">
          <GlowButton>Explore Templates →</GlowButton>
        </div>
      </div>

      <main className="relative z-10 container mx-auto px-4">
        <CategoryGrid />
        <FeaturedTemplates />
        <HowItWorks />
        <FreeTemplateCapture />
        <SellSection />
        <AffiliateSection />
      </main>
    </div>
  );
}
