
import { Template } from "@/types";
import { TemplateCard } from "./template-card";

interface RelatedTemplatesProps {
  relatedTemplates: Template[];
}

export function RelatedTemplates({ relatedTemplates }: RelatedTemplatesProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold tracking-tight text-text">Related Templates</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}
