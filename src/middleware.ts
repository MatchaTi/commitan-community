import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './libs/auth';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const token = request.cookies.get('token')?.value;

  const verifiedToken =
    token &&
    (await verifyToken(token).catch(() => {
      return NextResponse.redirect(new URL('/auth/login', request.nextUrl.origin));
    }));

  if (request.nextUrl.pathname.startsWith('/auth') && !verifiedToken) return;

  if (request.url.includes('/profil') && !verifiedToken) {
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl.origin));
  }

  if (request.url.includes('/auth') && verifiedToken) {
    return NextResponse.redirect(new URL(request.nextUrl.origin));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl.origin));
  }

  return response;
}

export const config = {
  matcher: ['/auth/:path*', '/profil/:path*', '/rekomendasi', '/tersimpan/:path*'],
};
