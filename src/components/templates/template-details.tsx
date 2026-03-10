
import { Template } from "@/types";
import { Badge } from "@/components/ui/badge";
import GlowButton from "@/components/ui/GlowButton";

interface TemplateDetailsProps {
  template: Template;
}

export function TemplateDetails({ template }: TemplateDetailsProps) {
  return (
    <div className="glass p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-text">{template.name}</h1>
      <p className="mt-2 text-lg text-subtext">{template.tagline}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-3xl font-bold text-purple-400">${template.price}</div>
        <Badge variant="outline">{template.level}</Badge>
      </div>
      <div className="mt-6">
        <GlowButton className="w-full">Purchase Template</GlowButton>
      </div>
      <div className="mt-8 prose prose-invert max-w-none">
        <p>{template.description}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-text">Nodes Used:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {template.nodes_used?.map((node) => (
            <Badge key={node} variant="secondary">{node}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
