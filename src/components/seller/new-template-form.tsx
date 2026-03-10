
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function NewTemplateForm() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this data to your backend
    console.log({ name, tagline, description });
    alert('Template submitted for review!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 glass p-8 rounded-lg mt-8">
      <h2 className="text-2xl font-bold">Submit a New Template</h2>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-subtext">Template Name</label>
        <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="tagline" className="text-sm font-medium text-subtext">Tagline</label>
        <Input id="tagline" type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="description" className="text-sm font-medium text-subtext">Detailed Description</label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <Button type="submit">Submit for Review</Button>
    </form>
  );
}
