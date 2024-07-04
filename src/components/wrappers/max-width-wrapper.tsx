import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        <section
            className={cn('mx-auto h-full w-full px-4 md:px-32', className)}
        >
            {children}
        </section>
    )
}

export default MaxWidthWrapper
