
'use client';
import { useState } from 'react';
import Container from '../shared/Container';
import { bannerImg1 } from '@/src/assets/images';
import CategoryCard from './CategoryCard';
import NavigationButton from './NavigationButton';

const categories = [
    {
        id: 1,
        name: 'LIFESTYLE\nSHOES',
        image: bannerImg1,
    },
    {
        id: 2,
        name: 'BASKETBALL\nSHOES',
        image: bannerImg1,
    },
    {
        id: 3,
        name: 'RUNNING\nSHOES',
        image: bannerImg1,
    },
    {
        id: 4,
        name: 'CASUAL\nSHOES',
        image: bannerImg1,
    },
];

const Categories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
    };
    const visibleCards = [
        categories[currentIndex],
        categories[(currentIndex + 1) % categories.length],
    ];
    return (

        <div className="w-full bg-secondary ">
            {/* Header */}
            <Container className='pt-6'>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[24px] lg:text-[74px] font-semibold text-white tracking-wider">CATEGORIES</h2>

                    {/* Navigation Buttons */}
                   <NavigationButton handlePrevious={handlePrevious} handleNext={handleNext} />
                </div>
            </Container>

            {/* Cards Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:ml-10 bg-white lg:rounded-tl-[48px]">
                {visibleCards.map((category, index) => <CategoryCard key={category.id} category={category} index={index} currentIndex={currentIndex} />)}
            </div>
        </div>

    );
};

export default Categories;