
'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { Stats } from '@/components/seller/stats';
import { TemplatesTable } from '@/components/seller/templates-table';
import { NewTemplateForm } from '@/components/seller/new-template-form';
import { Template } from '@/types';

const placeholderTemplates: Template[] = [
  {
    id: '1',
    seller_id: '1',
    name: "AI-Powered Content Generation",
    slug: "ai-powered-content-generation",
    tagline: "Generate blog posts, social media updates, and more with AI.",
    description: "Generate blog posts, social media updates, and more with AI.",
    category_id: '1',
    level: "Beginner",
    price: 49,
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
    download_count: 123,
    view_count: 1234,
    is_active: true,
    is_featured: true,
    is_verified: true,
    tags: ["Marketing", "AI"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function SellerDashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // In a real app, you would also check if the user has the 'seller' role
        setUser(user);
      } else {
        router.push('/login');
      }
      setLoading(false);
    };
    getUser();
  }, [router, supabase.auth]);

  if (loading) {
    return <div className="container mx-auto px-4 py-16 text-center">Loading...</div>;
  }

  if (!user) {
    return null; // Should be redirected by useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-text">Seller Dashboard</h1>
        <p className="text-subtext mt-2">Welcome back, {user.email}</p>
      </div>
      <Stats />
      <TemplatesTable templates={placeholderTemplates} />
      <NewTemplateForm />
    </div>
  );
}
