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
    ? 'FungiPower – Höhere Erträge in der Pilzzucht'
    : lang === 'nl'
      ? 'FungiPower – Hogere opbrengst in de champignonteelt'
      : 'FungiPower – Higher Yields in Mushroom Cultivation'

  const description = lang === 'de'
    ? 'Steigern Sie Ihren Pilzanbau mit FungiPower: ein 100 % natürlicher Biostimulans für gleichmäßigere Fruchtkörper, schnellere Flushes und höheren Ertrag pro m².'
    : lang === 'nl'
      ? 'Boost je champignonteelt met FungiPower: een 100% natuurlijke biostimulant voor uniformere vruchtlichamen, snellere vluchten en hogere opbrengst per m².'
      : 'Boost your mushroom cultivation with FungiPower: a 100% natural biostimulant for more uniform fruiting bodies, faster flushes and higher yield per m².'

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
