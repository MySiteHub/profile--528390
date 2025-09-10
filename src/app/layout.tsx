import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/theme.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'dada',
    template: '%s | dada'
  },
  description: '专业的个人作品集网站，展示您的作品、经历和联系方式。',
  keywords: '个人作品集,演员,模特,艺术家,创意专业人士,portfolio',
  authors: [{ name: 'dada' }],
  creator: 'dada',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://yourportfolio.com',
    title: 'dada',
    description: '专业的个人作品集网站，展示您的作品、经历和联系方式。',
    siteName: 'dada',
    images: [
      {
        url: '/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'dada - 个人作品集'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dada',
    description: '专业的个人作品集网站，展示您的作品、经历和联系方式。',
    images: ['/hero-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href="https://yourportfolio.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
