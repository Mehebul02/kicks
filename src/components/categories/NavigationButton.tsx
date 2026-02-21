import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationButton = ({ handlePrevious, handleNext }: { handlePrevious: () => void; handleNext: () => void }) => {
    return (
        <div className="flex gap-3">
            <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="bg-[#D9D9D6]  border-neutral-600  text-secondary cursor-pointer"
                aria-label="Previous category"
            >
                <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="bg-[#E7E7E3] border-neutral-600 hover:bg-text-white text-secondary cursor-pointer"
                aria-label="Next category"
            >
                <ChevronRight className="h-5 w-5" />
            </Button>
        </div>
    );
};

export default NavigationButton;