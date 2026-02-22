/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import OrderSummary from './OrderSummary'
import { useState } from 'react'
import { removeFromCart } from '@/src/redux/features/cartSlice'
import { toast } from 'sonner'

const Cart = () => {
  const dispatch = useDispatch();
const cartItems = useSelector((state: any) => state.cart.items);

console.log(cartItems)
  const [promoCode, setPromoCode] = useState('')

  const subtotal = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  )

  const deliveryFee = 6.99
  const salesTax = 0
  const itemCount = cartItems.length

  const handleUpdateQuantity = () => {}
 const handleRemoveItem = (id: number) => {
    const item = cartItems.find((i: any) => i.id === id)
    if (item) {
      dispatch(removeFromCart({ id, size: item.size, color: item.color }))
      toast.success("Product removed from cart successfully!");
    }
  }
  const handleAddToWishlist = () => {}
  const handleCheckout = () => {}

  return (
    
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          <div className="lg:col-span-2">
            
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Your Bag
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Items in your bag not reserved - check out now to make them yours.
              </p>
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item: any) => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                      onAddToWishlist={handleAddToWishlist}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p>Your cart is empty</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              itemCount={itemCount}
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              salesTax={salesTax}
              promoCode={promoCode}
              onPromoCodeChange={setPromoCode}
              onCheckout={handleCheckout}
            />
          </div>

        </div>
      </div>
   
  )
}

export default Cart