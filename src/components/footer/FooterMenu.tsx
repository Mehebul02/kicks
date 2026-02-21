import React from 'react';
import FooterTitle from '../shared/FooterTitle';
import { Facebook, Instagram, Music, Twitter } from 'lucide-react';
import Image from 'next/image';
import { footerLogo2 } from '@/src/assets/images';

const FooterMenu = () => {
       const categories = [
    { id: 1, name: 'Runners', href: '#' },
    { id: 2, name: 'Sneakers', href: '#' },
    { id: 3, name: 'Basketball', href: '#' },
    { id: 4, name: 'Outdoor', href: '#' },
    { id: 5, name: 'Golf', href: '#' },
    { id: 6, name: 'Hiking', href: '#' },
  ]

  const company = [
    { id: 1, name: 'About', href: '#' },
    { id: 2, name: 'Contact', href: '#' },
    { id: 3, name: 'Blogs', href: '#' },
  ]
    return (
         <div className="bg-secondary text-white px-2 md:px-8 lg:px-0 rounded-t-4xl">
          <div className="px-5 lg:px-10 pt-5 lg:pt-10">

            {/* Footer Links Grid */}
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">

              {/* About Us */}
              <div>
                <FooterTitle>About Us</FooterTitle>
                <p className="w-[326px] lg:w-[446px] font-semibold text-gray-300 text-[14px] lg:text-[20px] leading-relaxed leading-2">
                  We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                </p>
              </div>

              {/* Categories */}
              <div>
                <FooterTitle>Categories</FooterTitle>
                <ul className="space-y-2 text-[14px] lg:text-[20px] text-gray-300">
                  {categories.map((item) => (
                    <li key={item.id}>
                      <a href={item.href} className="hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <FooterTitle>Company</FooterTitle>
                <ul className="space-y-2 text-[14px] lg:text-[20px] text-gray-300">
                  {company.map((item) => (
                    <li key={item.id}>
                      <a href={item.href} className="hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <FooterTitle>Follow Us</FooterTitle>
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-accent transition-colors" aria-label="TikTok">
                    <Music size={20} />
                  </a>
                </div>
              </div>

            </div>

            {/* Logo Section */}
            <div className=" w-full mx-auto">
              <Image className='w-full' src={footerLogo2} alt='footerLogo2' width={1000} height={300} />
            </div>

          </div>
        </div>
    );
};

export default FooterMenu;