'use client'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import React from 'react'

interface SmoothScrollProps {
    children: React.ReactNode
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.2,
                infinite: false,
                gestureOrientation: 'vertical',
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            }}
        >
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll
