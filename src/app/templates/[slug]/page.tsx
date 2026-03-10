
import { MediaGallery } from "@/components/templates/media-gallery";
import { TemplateDetails } from "@/components/templates/template-details";
import { AuthorInfo } from "@/components/templates/author-info";
import { RelatedTemplates } from "@/components/templates/related-templates";
import { Template, Profile } from "@/types";

const placeholderTemplate: Template = {
  id: '1',
  seller_id: '1',
  name: "AI-Powered Content Generation",
  slug: "ai-powered-content-generation",
  tagline: "Generate blog posts, social media updates, and more with AI.",
  description: "This workflow uses the latest AI models to generate high-quality content for your business. It can be used to create blog posts, social media updates, product descriptions, and more. The workflow is easy to use and can be customized to fit your specific needs.",
  category_id: '1',
  level: "Beginner",
  price: 49,
  is_free: false,
  image_url: "/placeholder.svg",
  image_url_2: "/placeholder.svg",
  preview_video_url: null,
  json_file_url: null,
  documentation_url: null,
  nodes_used: ["OpenAI", "Google Sheets", "Twitter"],
  node_count: 3,
  n8n_workflow_id: null,
  n8n_version_required: "1.0.0",
  download_count: 123,
  view_count: 1234,
  is_active: true,
  is_featured: true,
  is_verified: true,
  tags: ["Marketing", "AI"],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

const placeholderAuthor: Profile = {
  id: '1',
  email: "seller@example.com",
  full_name: "Automation Seller",
  avatar_url: "/placeholder.svg",
  role: "seller",
  affiliate_code: null,
  affiliate_referred_by: null,
  paypal_email: null,
  bio: "I build automations that save you time and money.",
  website: "https://example.com",
  twitter: "@example",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

const relatedTemplates: Template[] = [
  {
    id: '2',
    seller_id: '2',
    name: "Automated Sales Outreach",
    slug: "automated-sales-outreach",
    tagline: "Nurture leads and close deals on autopilot.",
    description: "Nurture leads and close deals on autopilot.",
    category_id: '2',
    level: "Intermediate",
    price: 79,
    is_free: false,
    image_url: null,
    image_url_2: null,
    preview_video_url: null,
    json_file_url: null,
    documentation_url: null,
    nodes_used: null,
    node_count: 0,
    n8n_workflow_id: null,
    n8n_version_required: null,
    download_count: 0,
    view_count: 0,
    is_active: true,
    is_featured: true,
    is_verified: true,
    tags: ["Sales", "CRM"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function TemplateDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MediaGallery template={placeholderTemplate} />
        </div>
        <div>
          <div className="sticky top-24">
            <TemplateDetails template={placeholderTemplate} />
            <div className="mt-4">
              <AuthorInfo author={placeholderAuthor} />
            </div>
          </div>
        </div>
      </div>
      <RelatedTemplates relatedTemplates={relatedTemplates} />
    </div>
  );
}
