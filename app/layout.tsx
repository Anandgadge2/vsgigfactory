import './globals.css'
import '../sitemap-styles.css'
import { Inter } from 'next/font/google'
import Header from '../components/common/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gigfactory Website',
  description: 'Professional website for Gigfactory',
}

import type { ReactNode } from 'react'

type RootLayoutProps = { children: ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
