'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

export const NavigationMenuViewportWrapper = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div
        className={cn(
            'absolute left-1/2 top-full flex -translate-x-1/2 transform justify-center',
        )}
    >
        <NavigationMenuPrimitive.Viewport
            className={cn(
                'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-muted/10 bg-muted/5 text-popover-foreground shadow-md backdrop-blur-md duration-300 ease-in-out backdrop:blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
                className,
            )}
            ref={ref}
            {...props}
        />
    </div>
))
NavigationMenuViewportWrapper.displayName =
    NavigationMenuPrimitive.Viewport.displayName
