/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';
import ProductCard from './ProductCard';
import NavigationButton from '../shared/NavigationButton';
import { useGetProductsQuery } from '@/src/redux/api/productApi';
import { Product } from '@/src/types/product';

const RelatedProducts = () => {
    const { data,} = useGetProductsQuery({})
    const [api, setApi] = useState<CarouselApi | undefined>(undefined);
    const [current, setCurrent] = useState(0);
    const visibleDots = 4
    const startIndex = Math.floor(current / visibleDots) * visibleDots
    const endIndex = startIndex + visibleDots

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
        setCurrent(api.selectedScrollSnap());
    };
    api.on('select', handleSelect);
    return () => {
        api.off('select', handleSelect);
    };
}, [api]);
    return (
        <div className="w-full py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                        You may also like
                    </h2>
                    <NavigationButton
                        ClassName="bg-[#232321] text-white"
                        handlePrevious={() => api?.scrollPrev()}
                        handleNext={() => api?.scrollNext()}
                    />
                </div>

                {/* Carousel */}
                <Carousel setApi={setApi} className="w-full"
                    opts={{
                        align: 'start',
                        loop: false,
                        skipSnaps: false,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {data?.slice(0, 20)?.map((product: Product) => (
                            <CarouselItem
                                key={product.id}
                                className="pl-4 basis-1/2 sm:basis-1/2 lg:basis-1/4"
                            >
                                <ProductCard product={product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Dots Indicator */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {data?.slice(startIndex, endIndex)?.map((_: any, index: number) => {
                        const realIndex = startIndex + index

                        return (
                            <button
                                key={realIndex}
                                onClick={() => api?.scrollTo(realIndex)}
                                className={`h-2 rounded-full transition-all ${realIndex === current
                                    ? "bg-blue-600 w-6"
                                    : "bg-stone-300 w-2 hover:bg-stone-400"
                                    }`}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;



