import type { Metadata } from 'next'
import { Outfit, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Nguyễn Quốc Hùng | Front-End Developer',
  description: 'Professional portfolio showcasing frontend development expertise in React, Next.js, and modern web technologies with a focus on modern web technologies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased text-foreground bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
