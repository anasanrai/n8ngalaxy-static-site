'use client';

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/templates?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="glass sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-text">n8nGalaxy</Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/templates" className="text-subtext hover:text-text">Templates</Link>
            <Link href="/sell" className="text-subtext hover:text-text">Sell</Link>
            <Link href="/affiliates" className="text-subtext hover:text-text">Affiliates</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <Button type="submit" variant="outline" size="sm">Search</Button>
          </form>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
