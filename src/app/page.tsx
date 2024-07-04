import { Icons } from '@/components/icon/icons'
import { Vortex } from '@/components/shared/vortex'
import MaxWidthWrapper from '@/components/wrappers/max-width-wrapper'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            {/* <ThemeToggle /> */}
            <Vortex
                backgroundColor="hsl(var(--background))"
                // backgroundColor="#FFFFFF"
                className="w-full"
                rangeY={160}
                particleCount={450}
            >
                <MaxWidthWrapper>
                    <div className="z-10 h-full w-full text-white">
                        <Icons.logo />
                    </div>
                </MaxWidthWrapper>
            </Vortex>
        </>
    )
}
