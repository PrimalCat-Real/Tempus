import localFont from 'next/font/local'
import './globals.css'
import SmoothScroll from '@/components/providers/smooth-scroll'
import { cn } from '@/lib/utils'
import { Vortex } from '@/components/shared/vortex'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
})

export const metadata: Metadata = {
    title: 'Tempus',
    description: siteConfig.description,
    keywords: ['Tempus'],
    authors: [
        {
            name: 'primalcat',
            // url: 'https://shadcn.com',
        },
    ],
    creator: 'primalcat',
    // themeColor: [
    //     { media: '(prefers-color-scheme: light)', color: 'white' },
    //     { media: '(prefers-color-scheme: dark)', color: 'black' },
    // ],
    // openGraph: {
    //     type: 'website',
    //     locale: 'en_US',
    //     url: siteConfig.url,
    //     title: siteConfig.name,
    //     description: siteConfig.description,
    //     siteName: siteConfig.name,
    // },
    // twitter: {
    //     card: 'summary_large_image',
    //     title: siteConfig.name,
    //     description: siteConfig.description,
    //     images: [`${siteConfig.url}/og.jpg`],
    //     creator: '@shadcn',
    // },
    // icons: {
    //     icon: '/favicon.ico',
    //     shortcut: '/favicon-16x16.png',
    //     apple: '/apple-touch-icon.png',
    // },
    // manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'dark w-screen overflow-hidden bg-background font-sans antialiased transition-colors duration-300',
                )}
            >
                <SmoothScroll>
                    <div className="from-background-gradient-start to-background-gradient-end fixed inset-0 -z-10 bg-gradient-to-r"></div>
                    <header></header>
                    <main className="row-start-2 flex h-[300vw] min-h-screen w-full flex-col items-center gap-8 sm:items-start">
                        {children}
                    </main>
                    <footer className=""></footer>
                </SmoothScroll>
            </body>
        </html>
    )
}
