import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yahya Lmouri | Full-Stack Web Developer Portfolio',
  description: 'Experienced Full-Stack Web Developer specializing in React, TypeScript, Node.js, and modern web technologies. View my projects and technical skills.',
  keywords: 'Full-Stack Developer, Web Developer, React Developer, JavaScript, TypeScript, Node.js, MongoDB, Portfolio',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Yahya Lmouri | Full-Stack Web Developer Portfolio',
    description: 'Experienced Full-Stack Web Developer specializing in React, TypeScript, Node.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='dark' lang="en">
      <head>
        {/* Preconnect to improve font loading */}
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preconnect to FontAwesome CDN */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        {/* Load FontAwesome CSS immediately but non-blocking */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <noscript>
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />
        </noscript>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        {/* Defer Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
