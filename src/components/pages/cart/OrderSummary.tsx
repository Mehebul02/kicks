'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface OrderSummaryProps {
  itemCount: number
  subtotal: number
  deliveryFee?: number
  salesTax?: number
  promoCode?: string
  onPromoCodeChange?: (code: string) => void
  onCheckout?: () => void
}

const OrderSummary = ({
  itemCount,
  subtotal,
  deliveryFee = 0,
  salesTax = 0,
  promoCode = '',
  onPromoCodeChange,
  onCheckout,
}: OrderSummaryProps) => {

  const total = subtotal + deliveryFee + salesTax

  return (
    <div className="bg-white rounded-lg p-6 sticky top-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Order Summary
      </h2>

      <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{itemCount} ITEM</span>
          <span className="font-semibold text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Delivery</span>
          <span className="font-semibold text-gray-900">
            ${deliveryFee.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Sales Tax</span>
          <span className="font-semibold text-gray-900">
            {salesTax ? `$${salesTax.toFixed(2)}` : '-'}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-gray-900">Total</span>
        <span className="text-2xl font-bold text-gray-900">
          ${total.toFixed(2)}
        </span>
      </div>

      <Button
        className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-2 rounded-lg mb-4 cursor-pointer"
        onClick={onCheckout}
      >
        CHECKOUT
      </Button>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900">
          Use a promo code
        </label>
        <Input
          placeholder="Enter promo code"
          value={promoCode}
          onChange={(e) => onPromoCodeChange?.(e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-lg px-3 text-sm"
        />
      </div>
    </div>
  )
}

export default OrderSummary