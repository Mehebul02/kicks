'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { logo } from '@/src/assets/images'

export function HeroSection() {
  return (
    <section className="bg-background px-4 py-8 md:px-8 md:py-12">
      {/* Headline */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-balance">
          <span className="text-foreground">DO IT </span>
          <span className="text-primary">RIGHT</span>
        </h2>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Product Image Section */}
        <div className="w-full md:flex-1 relative">
          <div className="bg-gradient-to-br from-amber-200 to-amber-400 rounded-3xl p-6 md:p-8 overflow-hidden">
            <div className="relative aspect-square md:aspect-auto">
              <Image
                src={logo}
                alt="Nike Air Max"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Left Sidebar Tag */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4">
            <div className="bg-foreground text-background text-xs font-bold writing-vertical py-4 px-2 rounded-full transform -rotate-90">
              New Product in The Year
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-80 flex flex-col justify-start gap-6">
          {/* Product Details */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              NIKE AIR MAX
            </h3>
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
              Nike introducing the new air max for everyone's comfort
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            className="bg-primary text-primary-foreground font-bold text-sm py-3 w-fit hover:opacity-90 transition-opacity"
          >
            SHOP NOW
          </Button>

          {/* Product Thumbnails */}
          <div className="flex flex-col gap-3">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="border-2 border-accent rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="aspect-square bg-amber-100">
                  <Image
                    src={logo}
                    alt={`Product variant ${item}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
