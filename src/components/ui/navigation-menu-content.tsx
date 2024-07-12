'use client'

import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'
import useTabSlidePositionStore from '@/store/tab-slide-position'
import { AnimatePresence, motion } from 'framer-motion'

const transition = {
    type: 'spring',
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
}

const NavigationMenuContentWrapper = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => {
    const { position, isMenuOpen, setPosition, triggerRefs } =
        useTabSlidePositionStore()
    const handleMouseLeave = async () => {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log('test')
                resolve(400)
            }, 400) // Задержка в 1000 мс (1 секунда)
        })
        const allClosed = triggerRefs.every((ref) => {
            const state = ref.current?.getAttribute('data-state')
            return state !== 'open'
        })

        console.log('Используем актуальные данные:', allClosed)
        if (allClosed) {
            console.log('leave')
            setPosition((prevPosition) => ({
                ...prevPosition,
                opacity: 0,
                width: 0,
            }))
        }
    }

    return (
        <NavigationMenuPrimitive.Content
            ref={ref}
            className={cn(
                'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
                className,
            )}
            onMouseLeave={handleMouseLeave}
            {...props}
        />
        // <NavbarContent>

        // </NavbarContent>
    )
})

NavigationMenuContentWrapper.displayName = 'NavigationMenuContentWrapper'

export default NavigationMenuContentWrapper