
'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { UsersTable } from '@/components/admin/users-table';
import { TemplatesReviewTable } from '@/components/admin/templates-review-table';
import { CategoriesManagement } from '@/components/admin/categories-management';
import { Profile, Template, Category } from '@/types';

const placeholderUsers: Profile[] = [
  {
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
  },
];

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
    download_count: 0,
    view_count: 0,
    is_active: false, // Pending review
    is_featured: false,
    is_verified: false,
    tags: ["Marketing", "AI"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const placeholderCategories: Category[] = [
    {
        id: '1',
        name: 'Marketing Automation',
        slug: 'marketing-automation',
        description: null,
        icon: null,
        color: null,
        sort_order: 1,
        is_active: true,
    }
]

export default function AdminDashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // In a real app, you would also check if the user has the 'admin' role
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
        <h1 className="text-4xl font-bold tracking-tight text-text">Admin Dashboard</h1>
        <p className="text-subtext mt-2">Welcome back, {user.email}</p>
      </div>
      <UsersTable users={placeholderUsers} />
      <TemplatesReviewTable templates={placeholderTemplates} />
      <CategoriesManagement categories={placeholderCategories} />
    </div>
  );
}
