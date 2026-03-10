
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { template_id, amount } = await request.json()

  const { data, error } = await supabase
    .from('purchases')
    .insert([
      {
        buyer_id: user.id,
        template_id,
        amount,
        purchase_date: new Date().toISOString(),
      },
    ])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
