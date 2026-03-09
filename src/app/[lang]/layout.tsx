import { Inter, Outfit } from "next/font/google"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${inter.className} ${outfit.className}`}>
        {children}
      </body>
    </html>
  )
}
