'use client'

import Image from 'next/image'
import { bannerImg1, bannerImg2, bannerImg3 } from '@/src/assets/images'
import Container from '../shared/Container'
import CustomButton from '../shared/CustomButton'

export function HeroSection() {
  return (
    <Container className="bg-[#EDEAE4] px-4 sm:px-6 py-6 sm:py-8 min-h-screen">
      
      {/* Headline */}
      <div className="mb-6">
        <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[223.5px] font-bold leading-none tracking-tight text-center">
          <span className="text-secondary">DO IT </span>
          <span className="text-primary">RIGHT</span>
        </h1>
      </div>

      {/* Main Card */}
      <div className="relative rounded-[20px] overflow-hidden min-h-[382px] lg:min-h-[750px] flex items-end p-4 sm:p-8 pl-4 sm:pl-12">

        {/* Vertical sidebar tag (smaller on mobile) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <div
            className="bg-[#232321] text-white text-[8px] sm:text-[10px] font-semibold tracking-widest px-3 sm:px-6 py-2 sm:py-3 rounded-l-xl"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <h1 className="text-[12px] sm:text-[16px]">
              Nike product of the year
            </h1>
          </div>
        </div>

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
        <div className="absolute bottom-4 sm:bottom-6 right-3 sm:right-6 flex flex-col gap-2 z-10">
          {[bannerImg2, bannerImg3].map((img, index) => (
            <div
              key={index}
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden cursor-pointer relative  "
            >
              <Image
                src={img}
                alt={`Nike Air Max variant ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </Container>
  )
}