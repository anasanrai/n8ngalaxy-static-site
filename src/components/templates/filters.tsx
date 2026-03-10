
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface FiltersProps {
  onSearch: (searchTerm: string) => void;
  onSort: (sortBy: string) => void;
}

export function Filters({ onSearch, onSort }: FiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSort = (sortBy: string) => {
    setSortBy(sortBy);
    onSort(sortBy);
  };

  return (
    <div className="p-4 glass rounded-lg flex flex-col md:flex-row gap-4">
      <Input
        placeholder="Search templates..."
        value={searchTerm}
        onChange={handleSearch}
        className="flex-grow"
      />
      <div className="flex items-center gap-4">
        <span className="text-subtext">Sort by:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[180px] justify-between">
              {sortBy === 'popular' ? 'Most Popular' : 'Newest'}
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => handleSort('popular')}>Most Popular</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleSort('newest')}>Newest</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
