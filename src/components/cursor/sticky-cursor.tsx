'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function index() {
    const [cursorSize, setCursorSize] = useState(16)
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e

        let isInsideSpecialElement = false
        const specialElements = document.querySelectorAll(
            '.cursor-scale, #cursor-scale',
        )

        specialElements.forEach((element) => {
            const rect = element.getBoundingClientRect()
            if (
                clientX >= rect.left &&
                clientX <= rect.right &&
                clientY >= rect.top &&
                clientY <= rect.bottom
            ) {
                isInsideSpecialElement = true
            }
        })

        if (isInsideSpecialElement) {
            setCursorSize(42)
            mouse.x.set(clientX - 42 / 2)
            mouse.y.set(clientY - 42 / 2)
        } else {
            setCursorSize(16)
            mouse.x.set(clientX - cursorSize / 2)
            mouse.y.set(clientY - cursorSize / 2)
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
        }
    }, [])

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                width: cursorSize,
                height: cursorSize,
            }}
            animate={{
                width: cursorSize,
                height: cursorSize,
            }}
            className="pointer-events-none absolute h-4 w-4 rounded-full border-[1px] border-primary"
        ></motion.div>
    )
}
