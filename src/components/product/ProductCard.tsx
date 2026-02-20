import Image from 'next/image'
import React from 'react'

interface ProductCardProps {
    product: {
        id: number
        name: string
        price: number
        image: string
    }
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="group cursor-pointer">
            <div className="flex flex-col">
                <div className="relative bg-white p-2 rounded-2xl overflow-hidden mb-4 aspect-square flex items-center justify-center  hover:shadow-md transition-shadow duration-300">
                    <div className="absolute top-2 left-2 bg-[#5B5BD6] text-white text-sm font-bold z-10 px-4 py-3 rounded-tl-[24px] rounded-br-[24px]">
                        New
                    </div>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <h3 className="text-secondary font-semibold text-sm md:text-base lg:text-2xl leading-tight mb-4">
                    {product.name}
                </h3>
                <button className="w-full bg-secondary text-white cursor-pointer hover:bg-secondary/90 font-medium py-3 px-4 rounded-[8px] transition-colors duration-200 text-xs md:text-sm lg:text-[14px]">
                    VIEW PRODUCT –
                    <span className="text-yellow-500 ml-1">${product.price}</span>
                </button>

            </div>
        </div>
    )
}

export default ProductCard