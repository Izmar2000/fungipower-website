import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '../globals.css'
import { i18n } from '../../i18n-config'
import { ResolvingMetadata } from 'next'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params

  const title = lang === 'de'
    ? 'FungiPower – Effizientes Pflanzenwachstum & höhere Erträge'
    : lang === 'nl'
      ? 'FungiPower – Efficiënte plantengroei & hogere opbrengst'
      : 'FungiPower – Efficient Plant Growth & Higher Yields'

  const description = lang === 'de'
    ? 'Steigern Sie Ihren Anbau mit FungiPower: ein 100 % natürlicher Nährstoff-Transporter für weniger Verschwendung, bessere Aufnahme und eine gesündere Ernte.'
    : lang === 'nl'
      ? 'Boost je teelt met FungiPower: een 100% natuurlijke voedingstransporteur voor minder verspilling, betere opname en een gezonder gewas.'
      : 'Boost your cultivation with FungiPower: a 100% natural nutrient transporter to eliminate waste, ensure better uptake, and achieve healthier crops.'

  return {
    title: {
      default: title,
      template: '%s | FungiPower'
    },
    description,
    metadataBase: new URL('https://fungipower.com'),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'nl-NL': '/nl',
        'en-US': '/en',
        'de-DE': '/de',
      },
    },
    robots: {
      index: false,
      follow: false,
    },
    icons: {
      icon: [
        { url: '/favicon.ico?v=3' },
        { url: '/icon.png?v=3', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png?v=3' },
      ],
    },
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  return (
    <html lang={lang} className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased font-inter bg-[#02211b] text-white">
        {children}
      </body>
    </html>
  )
}
