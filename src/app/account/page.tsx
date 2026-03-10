
'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';

import AccountForm from '@/components/account/account-form';

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
      setLoading(false);
    };
    getUser();
  }, [router, supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-16 text-center">Loading...</div>;
  }

  if (!user) {
    return null; // Should be redirected by useEffect
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto glass p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-text">Your Account</h1>
        <div className="mt-6">
          <AccountForm user={user} />
        </div>
        <Button onClick={handleLogout} className="w-full mt-8">Logout</Button>
      </div>
    </div>
  );
}
