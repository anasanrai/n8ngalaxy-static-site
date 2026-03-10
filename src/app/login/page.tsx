
'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      router.push('/account');
    }
  };

  const handleOAuthLogin = async (provider: 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <div className="w-full max-w-md glass p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-text text-center">Welcome Back</h1>
        <p className="text-subtext text-center mt-2">Sign in to continue to n8nGalaxy</p>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background-secondary px-2 text-subtext">Or continue with</span>
          </div>
        </div>
        <Button variant="outline" className="w-full" onClick={() => handleOAuthLogin('github')}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <p className="mt-6 text-center text-sm text-subtext">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
