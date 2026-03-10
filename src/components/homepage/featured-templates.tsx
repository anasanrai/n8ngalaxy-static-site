
import GlowCard from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/badge";

const featuredTemplates = [
  {
    name: "AI-Powered Content Generation",
    author: "@Notion",
    price: 49,
    description: "Generate blog posts, social media updates, and more with AI.",
    tags: ["Marketing", "AI"],
  },
  {
    name: "Automated Sales Outreach",
    author: "@HubSpot",
    price: 79,
    description: "Nurture leads and close deals on autopilot.",
    tags: ["Sales", "CRM"],
  },
  {
    name: "E-commerce Order Fulfillment",
    author: "@Shopify",
    price: 99,
    description: "Sync orders, manage inventory, and automate shipping.",
    tags: ["E-commerce"],
  },
  {
    name: "CI/CD Pipeline for GitHub",
    author: "@GitHub",
    price: 129,
    description: "Automate your development workflow from commit to deployment.",
    tags: ["DevOps"],
  },
];

export function FeaturedTemplates() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text">
          Featured Templates
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-subtext">
          Hand-picked workflows to get you started.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {featuredTemplates.map((template) => (
          <GlowCard key={template.name} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-text">{template.name}</h3>
                <p className="text-sm text-subtext">by {template.author}</p>
              </div>
              <div className="text-lg font-bold text-purple-400">${template.price}</div>
            </div>
            <p className="mt-4 text-subtext">{template.description}</p>
            <div className="mt-4 flex gap-2">
              {template.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
