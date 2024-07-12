import LogoTempus from '@/components/shared/logo-tempus'
import React from 'react'
import Navbar from './navbar/navbar'

const tabs = [
    {
        title: 'Home',
        value: 'home',
        href: '/',
        content: 'Welcome to the home page',
    },
    {
        title: 'About',
        value: 'about',
        href: '/about',
        content: 'Learn more about us on this page',
    },
    {
        title: 'Contact',
        value: 'contact',
        href: '/contact',
        content: 'Get in touch with us',
    },
]
const Header = () => {
    return (
        <header className="max-width-wrapper font-open fixed inset-x-0 top-4 z-50 mx-auto flex items-center justify-between">
            <div className="nav-left-wrapper flex flex-1 items-center">
                <LogoTempus />
            </div>
            <div className="nav-pill-wrapper flex w-full flex-1 justify-center">
                <Navbar />
            </div>
            <div className="nav-right-wrapper flex flex-1 justify-end">
                Правая колонка
            </div>
        </header>
    )
}

export default Header
