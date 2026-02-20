import React from 'react';

const Sidebar = () => {
    return (
        <div>
             <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <div
            className="bg-[#232321] text-white text-[8px] sm:text-[10px] font-semibold tracking-widest px-3 sm:px-6 py-2 sm:py-3 rounded-l-xl"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <h1 className="text-[12px] sm:text-[16px]">
              Nike product of the year
            </h1>
          </div>
        </div>
        </div>
    );
};

export default Sidebar;