import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token');
  const isLoginPage = request.nextUrl.pathname === '/';
  const isDemoPage = request.nextUrl.pathname.startsWith('/demo');

  // Wenn eingeloggt und auf Login-Page -> redirect zu /demo
  if (authToken && isLoginPage) {
    return NextResponse.redirect(new URL('/demo', request.url));
  }

  // Wenn nicht eingeloggt und auf Demo-Page -> redirect zu /
  if (!authToken && isDemoPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/demo/:path*'],
};
