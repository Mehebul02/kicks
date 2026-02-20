import { bannerImg2, bannerImg3 } from '@/src/assets/images';
import Image from 'next/image';

const Thumbnails = () => {
    return (
        <div>
             <div className="absolute bottom-4 sm:bottom-6 right-3 sm:right-6 flex flex-col gap-2 z-10">
          {[bannerImg2, bannerImg3].map((img, index) => (
            <div
              key={index}
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden cursor-pointer relative  "
            >
              <Image
                src={img}
                alt={`Nike Air Max variant ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        </div>
    );
};

export default Thumbnails;