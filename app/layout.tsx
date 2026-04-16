import "../styles/global.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Providers from "@/components/Providers"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={plusJakarta.variable}>
      <head>
        <meta name='color-scheme' content='light dark' />
        <meta
          name='theme-color'
          content='#ffffff'
          media='(prefers-color-scheme: light)'
        />
        <meta
          name='theme-color'
          content='#1c1917'
          media='(prefers-color-scheme: dark)'
        />
      </head>
      <body className='bg-[radial-gradient(ellipse_at_top,_#ede9fe_0%,_#ffffff_60%)] dark:bg-[radial-gradient(ellipse_at_top,_#1c1917_0%,_#0c0a09_100%)]'>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
