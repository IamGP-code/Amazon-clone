

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import LoaderProvider from '@/providers/LoaderProvider/LoaderProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome | Amazon',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  




  return (
    <html lang="en">
      <body className={inter.className}>
        <LoaderProvider>
        {children}
        </LoaderProvider>
        </body>
    </html>
  )
}
