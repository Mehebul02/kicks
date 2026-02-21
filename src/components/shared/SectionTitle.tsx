
import { twMerge } from 'tailwind-merge';

const SectionTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div>
            <h2 className={twMerge("text-[24px] lg:text-[74px] font-semibold text-white tracking-wider", className)}>
                {children}
            </h2>
        </div>
    );
};

export default SectionTitle;