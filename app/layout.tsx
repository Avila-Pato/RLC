import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './index.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'RLC Engineering',
    description:
        'Industria especializada en Electricidad Industrial y Automatización',
    keywords: 'rlc, industria, automatización, electricidad, industrial',
    authors: [
        {
            name: 'Maicol Avila',
            url: 'https://www.linkedin.com/in/maicol-avila-0319371ba/',
        },
        {
            name: 'Patricio Avila',
            url: 'https://www.linkedin.com/in/pavilafigueroa/',
        },
    ],
    icons: {
        icon: '/assets/icono.svg',
        apple: '/apple-touch-icon.svg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
