'use client';
import { useState } from 'react';
import Container from '../shared/Container';
import CategoryCard from './CategoryCard';
import NavigationButton from '../shared/NavigationButton';
import SectionTitle from '../shared/SectionTitle';
import { useGetCategoriesQuery } from '@/src/redux/api/productApi';

const Categories = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { data: categories = [] } = useGetCategoriesQuery({});
    const visibleCards = categories.length
        ? [
            categories[currentIndex],
            categories[(currentIndex + 1) % categories.length],
        ]
        : [];
    const handlePrevious = () => {
        if (!categories.length) return;
        setCurrentIndex((prev) =>
            prev === 0 ? categories.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        if (!categories.length) return;
        setCurrentIndex((prev) =>
            prev === categories.length - 1 ? 0 : prev + 1
        );
    };

    if (!categories.length) return null;

    return (
        <div className="w-full bg-secondary ">
            <Container className="pt-6">
                <div className="flex items-center justify-between mb-6">
                    <SectionTitle className="text-white">
                        CATEGORIES
                    </SectionTitle>
                    <NavigationButton
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                    />
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:ml-10 bg-white lg:rounded-tl-[48px]">
                {visibleCards.map((category, index) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        index={index}
                        currentIndex={currentIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;