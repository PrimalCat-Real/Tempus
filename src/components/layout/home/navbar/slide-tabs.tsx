'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import SlideCursor from './slide-cursor'
import { SlideTabPosition } from '@/types'
import useTabSlidePositionStore from '@/store/tab-slide-position'

const SlideTabs = ({ children }: { children: ReactNode }) => {
    const { position, isMenuOpen, setPosition, triggerRefs } =
        useTabSlidePositionStore()
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMouseLeave = async () => {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log('test')
                resolve(400)
            }, 400) // Задержка в 400 мс
        })

        const allClosed = triggerRefs.every((ref) => {
            const state = ref.current?.getAttribute('data-state')
            return state !== 'open'
        })

        const isMouseOverElement = containerRef.current?.matches(':hover')

        console.log('Используем актуальные данные:', allClosed)
        if (!isMouseOverElement && allClosed) {
            console.log('leave')
            setPosition((prevPosition) => ({
                ...prevPosition,
                opacity: 0,
                width: 0,
            }))
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative z-20 h-fit w-fit rounded-[inherit]"
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <SlideCursor position={position} />
        </div>
    )
}

export default SlideTabs
