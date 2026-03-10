export type UUID = string

export type Role = 'user' | 'seller' | 'admin'

export interface Profile {
  id: UUID
  email: string | null
  full_name: string | null
  avatar_url: string | null
  role: Role
  affiliate_code: string | null
  affiliate_referred_by: string | null
  paypal_email: string | null
  bio: string | null
  website: string | null
  twitter: string | null
  created_at: string
  updated_at: string
}

export interface Category {
  id: UUID
  name: string
  slug: string
  description: string | null
  icon: string | null
  color: string | null
  sort_order: number
  is_active: boolean
}

export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Template {
  id: UUID
  seller_id: UUID | null
  name: string
  slug: string
  tagline: string | null
  description: string | null
  category_id: UUID | null
  level: Level
  price: number
  is_free: boolean
  image_url: string | null
  image_url_2: string | null
  preview_video_url: string | null
  json_file_url: string | null
  documentation_url: string | null
  nodes_used: string[] | null
  node_count: number
  n8n_workflow_id: string | null
  n8n_version_required: string | null
  download_count: number
  view_count: number
  is_active: boolean
  is_featured: boolean
  is_verified: boolean
  tags: string[] | null
  created_at: string
  updated_at: string
}
