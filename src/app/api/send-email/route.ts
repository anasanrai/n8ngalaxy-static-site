
import * as React from 'react';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { to, subject, name } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'n8nGalaxy <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      react: React.createElement(EmailTemplate, { name }),
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
