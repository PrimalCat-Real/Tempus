'use client'

import * as React from 'react'
// import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Icons } from '../icon/icons'

export function ThemeToggle() {
    // const { setTheme, theme } = useTheme()

    const toggleTheme = () => {
        document?.body.classList.toggle('dark')
        console.log('click')

        // const newTheme = theme === 'light' ? 'dark' : 'light'
    }
    return (
        <Button
            id="cursor-scale"
            className={cn('!rounded-[6px]')}
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
        >
            <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
