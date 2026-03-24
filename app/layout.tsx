import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kairós Docs - Documentos Profissionais para Clínicas de Saúde',
  description: 'Modelos prontos e editáveis de prontuários, contratos, declarações e documentos essenciais para profissionais da saúde. Valorize o cuidado. Otimize processos.',
  keywords: 'documentos clínicos, prontuário médico, modelos de documentos, clínica de saúde, psicologia, documentos profissionais',
  authors: [{ name: 'Kairós Docs' }],
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: 'Kairós Docs - Documentos Profissionais para Clínicas de Saúde',
    description: 'Modelos prontos e editáveis de prontuários, contratos e documentos essenciais.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kairós Docs',
    images: [
      {
        url: '/favicon_io/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Kairós Docs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Kairós Docs - Documentos Profissionais para Clínicas de Saúde',
    description: 'Modelos prontos e editáveis de prontuários, contratos e documentos essenciais.',
    images: ['/favicon_io/android-chrome-512x512.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
