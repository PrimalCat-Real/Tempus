'use client'

import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import useTabSlidePositionStore from '@/store/tab-slide-position'

const navigationMenuTriggerStyle = cva(
    'group inline-flex h-8.5 w-max z-20 items-center primary-foreground-gradient justify-center rounded-md bg-transparent hover:font-semibold hover:text-foreground px-4 py-2 text-sm font-semibold transition-colors focus:bg-background focus:outline-none disabled:pointer-events-none disabled:opacity-50 ',
)

interface NavigationMenuTriggerWrapperProps {
    index: number
    children: React.ReactNode
    className?: string
}

const NavigationMenuTriggerWrapper = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    NavigationMenuTriggerWrapperProps &
        React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, index, ...props }, forwardedRef) => {
    const localRef = React.useRef<HTMLButtonElement>(null)
    const setOpenTrigger = useTabSlidePositionStore(
        (state) => state.setOpenTrigger,
    )
    const setTriggerRef = useTabSlidePositionStore(
        (state) => state.setTriggerRef,
    )
    const { openTriggers, isMenuOpen, setPosition } = useTabSlidePositionStore()

    React.useImperativeHandle(forwardedRef, () => localRef.current!)

    React.useEffect(() => {
        setTriggerRef(index, localRef)
        const element = localRef.current
        const observer = new MutationObserver(() => {
            if (element) {
                const newState = element.getAttribute('data-state') as
                    | 'open'
                    | 'closed'
                console.log('NavigationMenu state changed:', newState)
                setOpenTrigger(index, newState === 'open')

                // if (newState !== 'open') {
                //     if (
                //         localRef?.current?.getAttribute('data-state') !=
                //             'open' &&
                //         !openTriggers.some((isOpen) => isOpen)
                //     ) {
                //         setPosition((prevPosition) => ({
                //             ...prevPosition,
                //             opacity: 0,
                //             width: 0,
                //         }))
                //     }
                // }
                // if (
                // newState !== 'open' &&
                // !openTriggers.some((isOpen) => isOpen)
                // ) {
                //     setPosition((prevPosition) => ({
                //         ...prevPosition,
                //         opacity: 0,
                //         width: 0,
                //     }))
                // }
            }
        })

        if (element) {
            observer.observe(element, {
                attributes: true,
                attributeFilter: ['data-state'],
            })
        }

        return () => observer.disconnect()
    }, [localRef, setOpenTrigger, index])

    return (
        <NavigationMenuPrimitive.Trigger
            ref={localRef}
            className={cn(
                navigationMenuTriggerStyle(),
                'group relative z-20',
                className,
            )}
            onMouseLeave={() => {
                const state = localRef?.current?.getAttribute('data-state')
                console.log('onMouseLeave data-state:', state)
                // if (state != 'open') {
                //     setPosition((prevPosition) => ({
                //         ...prevPosition,
                //         opacity: 0,
                //         width: 0,
                //     }))
                // }
                // Optionally, update the Zustand store or handle logic based on state
                // Example: setPosition or setIsMenuOpen(false)
            }}
            {...props}
        >
            {children}{' '}
            <ChevronDown
                className="relative top-[1px] ml-1 h-3 w-3 text-foreground transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
            />
        </NavigationMenuPrimitive.Trigger>
    )
})

NavigationMenuTriggerWrapper.displayName = 'NavigationMenuTriggerWrapper'

export default NavigationMenuTriggerWrapper
