'use client'

import Image from 'next/image'
import { Heart, Trash2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface CartItemProps {
  id: number
  image: string
  title: string
  description: string
  price: number
  size: string
  color: string
  quantity: number
  onUpdateQuantity?: (id: number, quantity: number) => void
  onRemove?: (id: number) => void
  onAddToWishlist?: (id: number) => void
}

const CartItem = ({
  id,
  image,
  title,
  description,
  price,
  size,
  color,
  quantity,
  onUpdateQuantity,
  onRemove,
  onAddToWishlist,
}: CartItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white border rounded-xl">

      {/* Product Image */}
      <div className="w-full sm:w-56">
        <div className="relative aspect-square  rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between ">

        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className='lg:w-[370px]'>
            <h3 className="text-[16px] lg:text-[24px] font-bold uppercase tracking-wide">
              {title}
            </h3>
            <p className="text-gray-600 mt-1 text-[14px] lg:text-[20px]  ">
              {description?.length > 80
                ? description?.slice(0, 80) + '...'
                : description}
            </p>
                 <span className="block lg:hidden text-[20px] mt-2 font-bold text-blue-600">
            ${(price * quantity).toFixed(2)}
          </span>

            {/* Size & Quantity Inline */}
            <div className="flex items-center gap-6 mt-4 text-sm">
              <span>
                Size {size}
              </span>

              <div className="flex items-center gap-2">
                <span>Quantity</span>
                <Select
                  defaultValue={quantity.toString()}
                  onValueChange={(val) =>
                    onUpdateQuantity?.(id, parseInt(val))
                  }
                >
                  <SelectTrigger className="w-16 h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((q) => (
                      <SelectItem className='border-none' key={q} value={q.toString()}>
                        {q}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Price Top Right */}
          <span className="hidden lg:block text-2xl font-bold text-blue-600">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>

        {/* Bottom Icons */}
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={() => onAddToWishlist?.(id)}
            className="hover:text-red-500 transition cursor-pointer"
          >
            <Heart className="w-6 h-6" />
          </button>

          <button
            onClick={() => onRemove?.(id)}
            className="hover:text-red-500 transition cursor-pointer"
          >
            <Trash2 className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default CartItem