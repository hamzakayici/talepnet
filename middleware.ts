import { NextRequest, NextResponse } from 'next/server';
import { detectPreferredLocale, isLocale, localeCookieName } from './src/i18n/config';
import { getLocaleFromPathname, localizeHref } from './src/i18n/pathnames';

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const localeFromPath = getLocaleFromPathname(pathname);

  if (!localeFromPath) {
    const cookieLocale = request.cookies.get(localeCookieName)?.value;
    const locale = isLocale(cookieLocale)
      ? cookieLocale
      : detectPreferredLocale(request.headers.get('accept-language'));
    const url = request.nextUrl.clone();
    url.pathname = localizeHref(pathname, locale);
    return NextResponse.redirect(url);
  }

  const headers = new Headers(request.headers);
  headers.set('x-locale', localeFromPath);

  const response = NextResponse.next({
    request: {
      headers,
    },
  });

  response.cookies.set(localeCookieName, localeFromPath, {
    path: '/',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
