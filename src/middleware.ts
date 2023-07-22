import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const token = request.cookies.get('token');

  if (request.nextUrl.pathname.startsWith('/profil')) {
    if (!token) return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/auth')) {
    if (token) return NextResponse.redirect(new URL(request.nextUrl.host));
  }

  return response;
}
