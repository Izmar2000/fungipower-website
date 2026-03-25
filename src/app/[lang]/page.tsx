import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ClientLayout from '@/components/ClientLayout'
import Hero from '@/components/Hero'
import GrowerFocus from '@/components/GrowerFocus'
import ProblemSection from '@/components/ProblemSection'
import CropResults from '@/components/CropResults'
import GlobalStandard from '@/components/GlobalStandard'
import Testimonials from '@/components/Testimonials'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  props: { params: Promise<{ lang: Locale }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang

  const title = lang === 'de'
    ? 'FungiPower – Effizientes Pflanzenwachstum & höhere Erträge'
    : lang === 'nl'
      ? 'FungiPower – Efficiënte plantengroei & hogere opbrengst'
      : 'FungiPower – Efficient Plant Growth & Higher Yields'

  const description = lang === 'de'
    ? 'Steigern Sie Ihren Pilzanbau mit FungiPower: ein 100 % natürlicher Biostimulans für gleichmäßigere Fruchtkörper, schnellere Flushes und höheren Ertrag pro m².'
    : lang === 'nl'
      ? 'Boost je champignonteelt met FungiPower: een 100% natuurlijke biostimulant voor uniformere vruchtlichamen, snellere vluchten en hogere opbrengst per m².'
      : 'Boost your mushroom cultivation with FungiPower: a 100% natural biostimulant for more uniform fruiting bodies, faster flushes and higher yield per m².'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'FungiPower',
      images: [
        {
          url: '/images/root-sketch.png',
          width: 1200,
          height: 630,
          alt: 'FungiPower Technology',
        },
      ],
      locale: lang === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/root-sketch.png'],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <ClientLayout dict={dict} lang={lang}>
      <div className="bg-[#011410]">
        <Hero dict={dict} lang={lang} />
        <GrowerFocus dict={dict} />
        <ProblemSection dict={dict} />
        <CropResults dict={dict} />
        <GlobalStandard dict={dict} />
        <Testimonials dict={dict} />
      </div>
    </ClientLayout>
  )
}
