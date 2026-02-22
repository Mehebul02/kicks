import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Category {
    id: number;
    name: string;
    image: string;
    slug: string;
}

interface CategoryCardProps {
    category: Category;
    index: number;
    currentIndex: number;
}

const CategoryCard = ({
    category,
    index,
    currentIndex,
}: CategoryCardProps) => {
    return (
        <div>
            <div
                key={`${category.id}-${currentIndex}`}
                className="p-8 flex flex-col justify-between hover:shadow-lg  cursor-pointer"
            >
                <div className="flex-1 flex items-center justify-center mb-6">
                    <div className="relative  w-[600px] h-[500px] rounded-2xl">
                        <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-contain rounded-2xl"
                            priority={index === 0}
                        />
                    </div>
                </div>

                <div className="flex items-end justify-between">
                    <h3 className="text-[24px] lg:text-[36px] font-semibold text-secondary whitespace-pre-line leading-tight">
                        {category.name}
                    </h3>

                    <Button
                        size="icon"
                        className="bg-secondary cursor-pointer hover:bg-neutral-800 text-white rounded-lg flex-shrink-0"
                        aria-label={`View ${category.name}`}
                    >
                        <ArrowUpRight className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;