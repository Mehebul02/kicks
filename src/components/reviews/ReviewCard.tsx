/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ReviewCard = ({ review, index }: { review: any; index: number }) => {
    return (
        <div

            className={`bg-white rounded-[32px] overflow-hidden cursor-pointer
 
  ${index > 0 ? 'hidden md:block' : ''}`}
        >
            {/* Header Section */}
            <div className="p-6 border-b border-stone-200 ">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                        <h3 className="text-[20px] lg:text-[24px] font-semibold text-neutral-900">{review.title}</h3>
                        <p className="text-sm lg:text-[16px]  mt-2 leading-relaxed">{review.text}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex-shrink-0 overflow-hidden">
                        <Image
                            src={review.avatar}
                            alt="Reviewer avatar"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className="fill-amber-400 text-amber-400"
                            />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-neutral-900">{review.rating}.0</span>
                </div>
            </div>

            {/* Product Image */}

            <div className="relative w-full h-[229px] md:h-[352px] bg-neutral-100">
                <Image
                    src={review.productImage}
                    alt="Product"
                    fill
                    className="object-cover "
                />
            </div>
        </div>
    );
};

export default ReviewCard;