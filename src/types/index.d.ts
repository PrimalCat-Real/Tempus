export type SiteConfig = {
    name: string
    description: string
    // url: string
    // ogImage: string
    // links: {
    //     twitter: string
    //     github: string
    // }
}

export type SlideTabPosition = {
    left: number
    width: number
    opacity: number
}

export interface BlurFadeProps {
    children: React.ReactNode
    className?: string
    variant?: {
        hidden: { y: number }
        visible: { y: number }
    }
    duration?: number
    delay?: number
    yOffset?: number
    inView?: boolean
    inViewMargin?: string
    blur?: string
}
