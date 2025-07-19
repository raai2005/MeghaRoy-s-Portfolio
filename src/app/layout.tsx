import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Megha Portfolio - Full Stack Developer',
  description: 'Dynamic portfolio website showcasing modern web development skills with Next.js, MongoDB, and Cloudinary',
  keywords: ['portfolio', 'full stack developer', 'react', 'next.js', 'web development', 'Megha'],
  authors: [{ name: 'Megha' }],
  creator: 'Megha',
  icons: {
    icon: 'https://res.cloudinary.com/dcz3olflf/image/upload/v1/portfolio/favicon.png',
    shortcut: 'https://res.cloudinary.com/dcz3olflf/image/upload/v1/portfolio/favicon.png',
    apple: 'https://res.cloudinary.com/dcz3olflf/image/upload/v1/portfolio/apple-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#2563eb',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
