'use client'
import { SlideTabPosition } from '@/types'
import { motion } from 'framer-motion'
import React from 'react'

const SlideCursor = ({ position }: { position: SlideTabPosition }) => {
    return (
        <motion.div
            animate={{
                ...position,
            }}
            className="absolute top-0 z-10 h-full rounded-[inherit] bg-black"
        />
    )
}

export default SlideCursor
