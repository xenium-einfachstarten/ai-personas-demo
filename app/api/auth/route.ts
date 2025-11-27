import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.USER_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        { error: 'Server-Konfigurationsfehler' },
        { status: 500 }
      );
    }

    if (password === correctPassword) {
      const cookieStore = cookies();

      // Session Cookie setzen (7 Tage gültig)
      cookieStore.set('auth_token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 Tage
        path: '/',
      });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Falsches Passwort' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Interner Server-Fehler' },
      { status: 500 }
    );
  }
}
