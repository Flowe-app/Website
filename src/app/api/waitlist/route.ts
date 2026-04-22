import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido / Invalid email' },
        { status: 400 }
      );
    }

    // Insert the email into the 'waitlist' table
    const { data, error } = await supabaseAdmin
      .from('waitlist')
      .insert([{ email }])
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
