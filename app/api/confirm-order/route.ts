// فـ السيت الآخر (Thank You Site): src/app/api/confirm-order/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Server-to-Server call to paytax.store (Invisible to Whop & Browser)
    const res = await fetch('https://paytax.store/api/webhook/whop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: 'ilyas_secret_2026',
        email: body.email || '',
      }),
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: true, data });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}