'use client'
import useTabSlidePositionStore from '@/store/tab-slide-position'
import { SlideTabPosition } from '@/types'
import React, { ReactNode, useRef } from 'react'

interface TabProps {
    children: React.ReactNode
}

const SlideTab: React.FC<TabProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { position, isMenuOpen } = useTabSlidePositionStore()
    const setPosition = useTabSlidePositionStore((state) => state.setPosition)

    return (
        <div
            className="h-fit w-fit"
            ref={ref}
            onMouseEnter={() => {
                console.log('enter', isMenuOpen)

                if (!ref.current) return

                const { width } = ref.current.getBoundingClientRect()

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                })
                // setIsMenuOpen(true)
            }}
            role="tab"
            tabIndex={0}
            onMouseLeave={() => {
                // console.log('isMenuOpen', isMenuOpen)
            }}
        >
            {children}
        </div>
    )
}

export default SlideTab
