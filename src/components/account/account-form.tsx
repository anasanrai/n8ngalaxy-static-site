
'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { type User } from '@supabase/supabase-js'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [bio, setBio] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, website, bio`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setWebsite(data.website)
        setBio(data.bio)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile() {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        website,
        bio,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="fullName" className="text-sm font-medium text-subtext">Full Name</label>
        <Input id="fullName" type="text" value={fullname || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)} />
      </div>
      <div>
        <label htmlFor="website" className="text-sm font-medium text-subtext">Website</label>
        <Input id="website" type="url" value={website || ''} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div>
        <label htmlFor="bio" className="text-sm font-medium text-subtext">Bio</label>
        <Textarea id="bio" value={bio || ''} onChange={(e) => setBio(e.target.value)} />
      </div>

      <div>
        <Button onClick={() => updateProfile()} disabled={loading}>
          {loading ? 'Loading ...' : 'Update'}
        </Button>
      </div>
    </div>
  )
}
