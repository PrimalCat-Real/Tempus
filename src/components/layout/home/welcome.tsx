import FlowButton from '@/components/shared/flow-button'
import { Vortex } from '@/components/shared/vortex'
import BlurFade from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { House } from 'lucide-react'
import React from 'react'

const Welcome = () => {
    return (
        <Vortex
            backgroundColor="hsl(var(--background))"
            className="w-full"
            rangeY={160}
            particleCount={450}
        >
            <div className="primary-foreground-gradient z-10 flex h-full min-h-screen w-full flex-col items-center justify-center text-center">
                <BlurFade delay={0.25} inView>
                    <h2 className="primary-foreground-gradient text-5xl">
                        Immerse in the Flow of Game
                    </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                    <p className="secondary-foreground-gradient w-full max-w-screen-sm text-wrap break-all text-center">
                        n publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        f
                    </p>
                </BlurFade>
                <FlowButton></FlowButton>
                {/* <Button
                    variant="expandIcon"
                    Icon={House}
                    className="text-foreground"
                    iconPlacement="left"
                >
                    Icon left
                </Button> */}
            </div>
        </Vortex>
    )
}

export default Welcome
