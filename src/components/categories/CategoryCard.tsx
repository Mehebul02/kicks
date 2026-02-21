import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';


interface Category {
    id: number;
    name: string;
    image: string;
    slug: string;
    index: number;
    currentIndex: number;
   category: Category
}

const CategoryCard = ({ category, index, currentIndex }:Category) => {
    return (
        <div>
            <div
                        key={`${category.id}-${currentIndex}`}
                        className=" p-8  flex flex-col justify-between hover:shadow-lg transition-shadow "
                    >
                        {/* Image Container */}
                        <div className="flex-1 flex items-center justify-center mb-6">
                            <div className="relative w-full h-56">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-contain"
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