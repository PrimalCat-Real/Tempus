import { Nunito_Sans, Inter, Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
    weight: ['200', '300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap', // display system and after swap to custom
    variable: '--font-inter',
})
export const open_sans = Open_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap', // display system and after swap to custom
    variable: '--font-open-sans',
})

export const nunito = Nunito_Sans({
    weight: ['200', '300', '400'],
    subsets: ['latin'],
    display: 'swap', // display system and after swap to custom
    variable: '--font-nunito',
})
