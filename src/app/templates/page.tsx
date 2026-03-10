
'use client';

import { useState, useEffect } from 'react';
import { Filters } from "@/components/templates/filters";
import { TemplateCard } from "@/components/templates/template-card";
import { Template } from "@/types";

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await fetch('/api/templates');
      const data = await res.json();
      setTemplates(data);
      setFilteredTemplates(data);
      setLoading(false);
    };
    fetchTemplates();
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = templates.filter((template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTemplates(filtered);
  };

  const handleSort = (sortBy: string) => {
    const sorted = [...filteredTemplates].sort((a, b) => {
      if (sortBy === 'popular') {
        return b.download_count - a.download_count;
      } else {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
    });
    setFilteredTemplates(sorted);
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-16 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-text">Explore Templates</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-subtext">
          Find the perfect workflow to automate your business.
        </p>
      </div>
      <Filters onSearch={handleSearch} onSort={handleSort} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}
