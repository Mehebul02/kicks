/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import React from 'react';
import ProductColor from './ProductColor';
import ProductSizes from './ProductSizes';
import ProductPurchaseActions from './ProductPurchaseActions';
import { Badge } from '@/components/ui/badge';

interface MobileViewDetailsProps {
    data: any;
    activeSlide: number;
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
    wishlist: boolean;
    setWishlist: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddToCart: () => void;
    selectedSize: string;
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
    selectedColor: string;
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const MobileViewDetails = ({ data, activeSlide, setActiveSlide, wishlist, setWishlist, handleAddToCart, selectedSize, setSelectedSize, selectedColor, setSelectedColor }: MobileViewDetailsProps) => {
    return (
        <div className="lg:hidden flex flex-col">
            <div className="bg-[#ece9e4] w-full aspect-square relative overflow-hidden">
                <div
                    className="flex h-full transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                    {data?.images?.map((image: string, index: number) => (
                        <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center p-6">
                            <Image
                                src={image}
                                alt={`product-image-${index}`}
                                width={400}
                                height={400}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </div>
                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {data?.images?.map((_: any, idx: any) => (
                        <button
                            key={idx}
                            onClick={() => setActiveSlide(idx)}
                            className={`rounded-full transition-all ${activeSlide === idx
                                ? 'w-2 h-2 bg-stone-700'
                                : 'w-2 h-2 bg-stone-400'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex gap-2 px-4 py-3 overflow-x-auto">
                {data?.images.map((image: any, idx: any) => (
                    <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`flex-shrink-0 w-14 h-14 rounded bg-[#ece9e4] border-2 overflow-hidden transition-all ${activeSlide === idx ? 'border-stone-700' : 'border-transparent'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`product-image-${idx}`}
                            width={56}
                            height={56}
                            className="object-contain w-full h-full"
                        />
                    </button>
                ))}
            </div>
            <div className="flex flex-col gap-4 px-4 pb-8">
                <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-sm font-medium w-fit">
                   New Release
                </Badge>
              
                <h1 className="text-xl font-extrabold text-black leading-tight tracking-tight uppercase">
                    {data?.title}
                </h1>
                <p className="text-2xl font-bold text-blue-600">${data?.price ? data.price.toFixed(2) : "0.00"}</p>

                {/* Color */}
                <div>
                    <p className="text-xs font-bold tracking-widest text-black mb-2">Color</p>
                    <ProductColor selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                </div>

                {/* Size */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-bold tracking-widest text-black">Size</p>
                        <a href="#" className="text-xs font-semibold text-stone-500">SIZE CHART</a>
                    </div>
                    <ProductSizes selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                </div>
                {/* product action button  */}
                <ProductPurchaseActions handleAddToCart={handleAddToCart} wishlist={wishlist} setWishlist={setWishlist} />
                {/* About */}
                <div>
                    <p className="text-[16px] text-secondary font-bold tracking-widest uppercase mb-2">About the Product</p>
                    <p className="text-[16px] text-stone-600 mb-1">{data?.description}</p>

                </div>

            </div>
        </div>
    );
};

export default MobileViewDetails;