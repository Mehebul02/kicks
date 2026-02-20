'use client'

import Image from 'next/image'
import { bannerImg1, } from '@/src/assets/images'
import Container from '../shared/Container'
import CustomButton from '../shared/CustomButton'
import Thumbnails from './Thumbnails'
import Sidebar from './Sidebar'

export function HeroSection() {
  return (
    <Container className=" px-4 sm:px-6 py-6 sm:py-8 ">

      {/* Headline */}
      <div className="mb-6">
        <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[223.5px] font-bold leading-none tracking-tight text-center">
          <span className="text-secondary">DO IT </span>
          <span className="text-primary">RIGHT</span>
        </h1>
      </div>

      {/* Main Card */}
      <div className="relative rounded-[20px] overflow-hidden min-h-[382px] lg:min-h-[750px] flex items-end p-4 sm:p-8 pl-4 sm:pl-12">
        {/* sidebar */}
        <Sidebar />
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={bannerImg1}
            alt="Nike Air Max"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Bottom-left content */}
        <div className="relative z-10 max-w-[220px] sm:max-w-none ml-6 lg:ml-0">
          <h2 className="text-white text-xl sm:text-5xl lg:text-7xl font-semibold tracking-wide mb-1.5 drop-shadow-md">
            NIKE AIR MAX
          </h2>
          <p className="text-white/90 text-[11px] sm:text-[13px] lg:text-[24px] font-semibold leading-relaxed mb-3">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <CustomButton>Shop Now</CustomButton>
        </div>

        {/* Thumbnails */}
        <Thumbnails />

      </div>
    </Container>
  )
}