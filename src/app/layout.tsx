import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Preloader from '@/components/shared/Preloader';
import { AppContextProvider } from '@/context/AppContext';
import { detectPreferredLocale, defaultLocale, isLocale } from '@/i18n/config';
import { getLocaleFromPathname } from '@/i18n/pathnames';
import { manrope } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const headerList = await headers();
  const pathnameLocale = getLocaleFromPathname(
    headerList.get('next-url') ?? headerList.get('x-pathname') ?? headerList.get('x-invoke-path') ?? '',
  );
  const requestLocale = headerList.get('x-locale');
  const locale = pathnameLocale
    ?? (isLocale(requestLocale)
    ? requestLocale
    : detectPreferredLocale(headerList.get('accept-language')))
    ?? defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            enableSystem={false}
            disableTransitionOnChange>
            <Suspense>
              <Preloader />
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
