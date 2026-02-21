import React from 'react';

const FooterTitle = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h3 className="text-[#FFA52F] font-semibold text-2xl lg:text-4xl mb-4">{children}</h3>
        </div>
    );
};

export default FooterTitle;