import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = i18n.locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect based on country
    // NL & BE -> nl
    // Rest of world -> en
    const country = (request.geo?.country || request.headers.get('x-vercel-ip-country'))?.toLowerCase()

    // Redirect Dutch and Belgian visitors to the Dutch version
    const locale = (country === 'nl' || country === 'be') ? 'nl' : 'en'

    // Redirect to the new URL
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next), API routes, and static files
        '/((?!api|_next/static|_next/image|images|favicon.ico|.*\\..*).*)',
    ],
}
