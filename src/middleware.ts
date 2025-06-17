import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of public routes that do not require authentication
const PUBLIC_ROUTES = ['/login', '/signup'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.headers.get('x-fleetguard-auth-token');

  console.log('Middleware triggered for:', pathname);
    console.log('Auth Token:', authToken);

  // If user is authenticated and tries to access /login or /signup, redirect to home
  if (PUBLIC_ROUTES.includes(pathname) && authToken) {
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = '/';
    return NextResponse.redirect(homeUrl);
  }

  // If route is public, allow
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // If not authenticated, redirect to /login
  if (!authToken) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|logo.svg|auth-image.png).*)'],
};
