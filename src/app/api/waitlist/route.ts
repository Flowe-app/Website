import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

const CONSENT_VERSION = '1.0';

export async function POST(request: Request) {
  try {
    const { email, consent } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido / Invalid email' },
        { status: 400 }
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        { error: 'Consent is required.' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('waitlist')
      .insert([{
        email,
        consent: true,
        consented_at: new Date().toISOString(),
        consent_version: CONSENT_VERSION,
      }])
      .select();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ success: true, message: 'Email already registered.' }, { status: 200 });
      }

      console.error('Waitlist insertion error:', error);
      return NextResponse.json(
        { error: 'Something went wrong.', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
