'use client'

import { useState } from 'react'
import { Menu, X, Search, User } from 'lucide-react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import Container from '../shared/Container'
import Image from 'next/image'
import { logo } from '@/src/assets/images'
import Link from 'next/link'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <Container>
            <header className="bg-white rounded-[24px] mt-5 sticky top-0">

                <div className="md:hidden px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    <div className="flex items-center gap-2 ">
                        <Image className='w-24' src={logo} alt='logo' width={300} height={300} />
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <User className="w-6 h-6" />
                        </button>
                        <button className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                            0
                        </button>
                    </div>
                </div>

                <MobileNav isOpen={isMobileMenuOpen} />

                <div className="hidden md:flex items-center justify-between px-8 py-5">
                    <DesktopNav />

                    <Link href="/">
                    <div className="flex items-center gap-2 ">
                        <Image className='w-32' src={logo} alt='logo' width={300} height={300} />
                    </div>
                    </Link>

                    <div className="flex items-center gap-6">
                        <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Search className="w-6 h-6" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <User className="w-6 h-6" />
                        </button>
                        <button className="bg-orange-500 text-white rounded-full w-10 h-10 cursor-pointer flex items-center justify-center text-sm font-semibold">
                            0
                        </button>
                    </div>
                </div>
            </header>
        </Container>
    )
}