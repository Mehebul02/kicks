'use client';
import Image, { StaticImageData } from 'next/image';
import { avatar1, avatar2, avatar3, reviewImage1, reviewImage2, reviewImage3 } from '@/src/assets/images';
import CustomButton from '../shared/CustomButton';
import SectionTitle from '../shared/SectionTitle';
import ReviewCard from './ReviewCard';

interface Review {
    id: number;
    title: string;
    text: string;
    rating: number;
    avatar: StaticImageData;
    productImage: StaticImageData;
}

const reviews: Review[] = [
    {
        id: 1,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5.0,
        avatar: avatar1,
        productImage: reviewImage1,
    },
    {
        id: 2,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5.0,
        avatar: avatar2,
        productImage: reviewImage2,
    },
    {
        id: 3,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5.0,
        avatar: avatar3,
        productImage: reviewImage3,
    },
];

const Reviews = () => {
    return (
        <div className="w-full  px-8 mt-14 lg:mb-24 ">
            <div className="flex items-center justify-between mb-6">
                <SectionTitle className='text-secondary'>REVIEWS</SectionTitle>
                <CustomButton>SEE ALL</CustomButton>
            </div>

            {/* Reviews Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((review, index) => <ReviewCard key={review.id} review={review} index={index} />)}
            </div>
        </div>
    );
};

export default Reviews;