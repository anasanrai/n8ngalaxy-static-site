
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/badge";
import { Template } from "@/types";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.id}`}>
      <GlowCard className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-text">{template.name}</h3>
            <p className="text-sm text-subtext">by @{template.seller_id}</p> {/* Using author_pfp_url as a placeholder for author name */}
          </div>
          <div className="text-lg font-bold text-purple-400">${template.price}</div>
        </div>
        <p className="mt-4 text-subtext flex-grow">{template.description}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {template.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </GlowCard>
    </Link>
  );
}
