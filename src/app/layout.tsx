import './globals.css'
import SmoothScroll from '@/components/providers/smooth-scroll'
import { cn } from '@/lib/utils'
import { Vortex } from '@/components/shared/vortex'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Header from '@/components/layout/home/header'
import { inter, nunito, open_sans } from './fonts/fonts'

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
                    inter.variable,
                    open_sans.variable,
                    nunito.variable,
                )}
            >
                <SmoothScroll>
                    <div className="background-gradient fixed top-0 z-[-2] h-screen w-screen"></div>
                    {/* <div className="fixed inset-0 -z-10 bg-gradient-to-r from-background-gradient-start to-background-gradient-end" /> */}
                    <Header />
                    <main className="row-start-2 flex h-[300vh] min-h-screen w-full flex-col items-center gap-8 sm:items-start">
                        {children}
                    </main>
                    <footer className=""></footer>
                </SmoothScroll>
            </body>
        </html>
    )
}
