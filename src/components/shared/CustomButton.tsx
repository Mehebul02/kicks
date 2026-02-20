import React from 'react';

const CustomButton = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
             <button className="bg-[#5B5BD6] text-white text-[14px] font-extrabold tracking-widest uppercase px-4 lg:px-8 py-4 rounded-md hover:bg-[#232321] transition-colors cursor-pointer">
            {children}
          </button>
        </div>
    );
};

export default CustomButton;