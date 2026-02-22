/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/src/redux/features/cartSlice';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/src/redux/api/productApi';
import MobileViewDetails from './MobileViewDetails';
import ProductSizes from './ProductSizes';
import ProductColor from './ProductColor';
import ProductPurchaseActions from './ProductPurchaseActions';
import Loading from '../shared/Loading';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('38');
  const [selectedColor, setSelectedColor] = useState('1');
  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id as string);
  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    try {
      const cartItem: any = {
        id: data.id,
        name: data.name,
        image: data.images[0],
        price: data.price,
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
      };
      dispatch(addToCart(cartItem));
      toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart");
    }
  };

  if (isLoading) return <div><Loading /></div>
  return (
    <div className="">
      <div className="">
        <div className="hidden lg:grid grid-cols-2 gap-12 px-8 py-8">
          <div className="grid grid-cols-2 gap-2">
            {data?.images?.map((image: string, index: number) => (
              <div
                key={index}
                className="bg-[#ece9e4] rounded-md overflow-hidden aspect-square flex items-center justify-center"
              >
                <Image
                  src={image}
                  alt={`product-image-${index}`}
                  width={300}
                  height={300}
                  unoptimized
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/*  Details */}
          <div className="flex flex-col gap-4 pt-1">
            <div>
              <Badge className="bg-primary hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-sm font-medium">
                New Release
              </Badge>
            </div>
            <h1 className=" text-[20px] lg:text-[32px] font-extrabold text-black leading-tight tracking-tight uppercase">
              {data?.title}
            </h1>
            <p className="text-2xl font-bold text-primary">${data?.price ? data.price.toFixed(2) : "0.00"}</p>
            <div className="h-px bg-stone-200" />

            {/* Color */}
            <div>
              <p className="text-xs font-bold tracking-widest text-black mb-2">COLOR</p>
              <ProductColor selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[16px] font-semibold tracking-widest text-black">SIZE</p>
                <a href="#" className="text-[14px] font-medium text-secondary hover:text-black border-b-2">SIZE CHART</a>
              </div>
              <ProductSizes selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            </div>

            {/* product action button  */}
            <ProductPurchaseActions handleAddToCart={handleAddToCart} wishlist={wishlist} setWishlist={setWishlist} />

            <div>
              <p className="text-[16px] text-secondary font-bold tracking-widest uppercase mb-2">About the Product</p>
              <p className="text-[16px] text-stone-600 mb-1">{data?.description}</p>

            </div>
          </div>
        </div>

        {/* Mobile View */}
        <MobileViewDetails
          data={data}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          wishlist={wishlist}
          setWishlist={setWishlist}
          handleAddToCart={handleAddToCart}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default ProductDetails;